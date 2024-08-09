"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { Skeleton } from "../ui/skeleton";

const Slider = ({
	children,
	slidesToShow = 1,
	slidesToScroll = 1,
	responsive,
	autoPlay,
	autoPlaySpeed = 5000,
	gap = 10,
	infinite = false,
	className,
	getSliderActionsAndState,
}: SliderProps) => {
	const [currentSlide, setCurrentSlide] = useState(infinite ? slidesToShow : 0);
	const [transition, setTransition] = useState(false);
	const [slideWidth, setSlideWidth] = useState(0);
	const [slidesToShowPerPage, setSlidesToShowPerPage] = useState(infinite ? slidesToShow : 0);

	const totalSlides = React.Children.count(children);
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!responsive) return;

		const updateSlidesToShow = () => {
			const width = window.innerWidth;
			let slides = 1;

			for (const breakpoint in responsive) {
				if (responsive.hasOwnProperty(breakpoint) && width >= parseInt(breakpoint, 10)) {
					slides = responsive[breakpoint].items;
				}
			}

			setSlidesToShowPerPage(slides);

			if (containerRef.current) {
				const containerWidth = containerRef.current.offsetWidth;
				setSlideWidth(containerWidth / slides - gap);
			}
		};

		updateSlidesToShow();
		window.addEventListener("resize", updateSlidesToShow);

		return () => window.removeEventListener("resize", updateSlidesToShow);
	}, []);

	useEffect(() => {
		if (!autoPlay) return;

		const interval = setInterval(() => {
			throttledNextSlide();
		}, autoPlaySpeed);

		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		const isFunction = typeof getSliderActionsAndState === "function";

		if (!isFunction) return;

		const actionsAndState = {
			prevSlide: throttledPrevSlide,
			nextSlide: throttledNextSlide,
			currentSlide,
			totalSlides,
			prevSlideButtonDisabled: infinite ? false : currentSlide === 0,
			nextSlideButtonDisabled: infinite ? false : currentSlide + slidesToShowPerPage >= totalSlides,
		};

		getSliderActionsAndState(actionsAndState);
	}, [currentSlide]);

	const nextSlide = () => {
		if (currentSlide < totalSlides + slidesToShowPerPage) {
			setTransition(true);
			setCurrentSlide((prevSlide) => prevSlide + slidesToScroll);
		}
	};

	const prevSlide = () => {
		setTransition(true);
		setCurrentSlide((prevSlide) => {
			const newSlide = prevSlide - slidesToScroll;
			return Math.max(newSlide, 0);
		});
	};

	const throttledNextSlide = useCallback(throttle(nextSlide, 500), []);
	const throttledPrevSlide = useCallback(throttle(prevSlide, 500), []);

	const handleTransitionEnd = () => {
		if (!infinite) return;

		setTransition(false);

		if (currentSlide >= totalSlides + slidesToShowPerPage) {
			setCurrentSlide((prev) => prev - totalSlides);
		} else if (currentSlide <= 0) {
			setCurrentSlide(totalSlides);
		}
	};

	const clonedSlides = infinite
		? [
				...React.Children.toArray(children).slice(totalSlides - slidesToShowPerPage),
				...React.Children.toArray(children),
				...React.Children.toArray(children).slice(0, slidesToShowPerPage + slidesToShowPerPage),
		  ]
		: children;

	const totalLength = Array.isArray(clonedSlides) ? clonedSlides.length : totalSlides;

	return (
		<section className={`relative ${className}`}>
			<div ref={containerRef} className="overflow-hidden">
				<div
					className={`flex transition mx-auto ease-in-out ${
						transition ? "duration-500" : "duration-0"
					}`}
					style={{
						transform: `translate3d(-${currentSlide * (slideWidth + gap)}px, 0, 0)`,
						width: `${(totalLength / slidesToShowPerPage) * 100}%`,
					}}
					onTransitionEnd={handleTransitionEnd}
				>
					{slideWidth
						? React.Children.map(clonedSlides, (child, index) => (
								<div
									className="flex-shrink-0 w-full flex justify-center"
									style={{ width: `${slideWidth}px`, margin: `0 ${gap / 2}px` }}
									key={index}
								>
									{child}
								</div>
						  ))
						: React.Children.map(clonedSlides, (child, index) => (
								<div className="flex-shrink-0 w-max flex justify-center mx-auto mt-12 border rounded-lg p-6">
									<Skeleton className="h-80 max-w-96 min-w-72 rounded-lg" />
								</div>
						  ))}
				</div>
				{slideWidth ? (
					<>
						<Button
							onClick={prevSlide}
							size="icon"
							className="absolute z-10 ml-2 rounded-full -left-5 top-1/2 transform -translate-y-1/2 bg-gray-800/80 text-white"
							disabled={!infinite && currentSlide === 0}
						>
							<ChevronLeftIcon />
						</Button>
						<Button
							onClick={nextSlide}
							size="icon"
							className="absolute z-10 mr-2 rounded-full -right-5 top-1/2 transform -translate-y-1/2 bg-gray-800/80 text-white"
							disabled={!infinite && currentSlide + slidesToShowPerPage >= totalSlides}
						>
							<ChevronRightIcon />
						</Button>
					</>
				) : null}
			</div>
		</section>
	);
};

export default memo(Slider);

function throttle(func: Function, delay: number) {
	let prev = 0;
	return (args?: any) => {
		let now = new Date().getTime();

		if (now - prev > delay) {
			prev = now;
			return func(args);
		}
	};
}
