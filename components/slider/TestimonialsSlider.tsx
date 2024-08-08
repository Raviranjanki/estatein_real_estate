"use client";

import { testimonials } from "@/constants";
import { Testimonial } from "../home/Testimonials";
import Slider from "./Slider";

export default function TestimonialsSlider() {
	const settings: Omit<SliderProps, "children"> = {
		slidesToShow: 1,
		responsive: {
			0: {
				items: 1,
			},
			700: {
				items: 2,
			},
			1400: {
				items: 3,
			},
		},
	};

	return (
		<Slider {...settings} className="mt-10">
			{testimonials.map((testimonial) => (
				<Testimonial key={testimonial.title} {...testimonial} />
			))}
		</Slider>
	);
}
