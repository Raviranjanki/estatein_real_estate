"use client";

import { Cross2Icon } from "@radix-ui/react-icons";
import Link from "next/link";
import { ReactNode, useEffect, useRef, useState } from "react";

export default function HeaderBanner({ children }: { children: ReactNode }) {
	const headerRef = useRef<HTMLHeadingElement | null>(null);
	const [showBanner, setShowBanner] = useState(true);
	const [headerHeight, setHeaderHeight] = useState(132);

	useEffect(() => {
		const adjustMainContentMargin = () => {
			if (headerRef.current) {
				setHeaderHeight(headerRef.current.offsetHeight);
			}
		};

		adjustMainContentMargin();
		window.addEventListener("resize", adjustMainContentMargin);

		return () => window.removeEventListener("resize", adjustMainContentMargin);
	}, [showBanner]);

	return (
		<>
			<header ref={headerRef} className="fixed z-50 top-0 w-full">
				{showBanner && (
					<div className="relative w-full h-[60px] bg-grey-600/50 flex-center overflow-hidden">
						<img
							src="/assets/images/abstract-design.png"
							alt="banner"
							style={{ width: "100%", height: "400%" }}
							className="absolute -top-16 right-0 -z-20 aspect-video bg-grey-600"
						/>
						<div className="flex items-center justify-between w-full h-full px-2">
							<div className="flex justify-center items-center gap-4 flex-1">
								<p className="text-xs xl:text-base text-nowrap">
									✨Discover Your Dream Property with Estatein
								</p>
								<Link href="#" className="text-xs xl:text-base underline text-nowrap">
									Learn More
								</Link>
							</div>
							<Cross2Icon
								onClick={() => setShowBanner(false)}
								className="h-5 w-5 bg-grey-100/60 rounded-full p-1 xl:mx-10 cursor-pointer"
							/>
						</div>
					</div>
				)}
				{children}
			</header>
			<div style={{ marginBottom: `${headerHeight}px`, transition: "margin-top 0.3s" }}></div>
		</>
	);
}
