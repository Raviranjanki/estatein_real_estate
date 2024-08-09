import { Button } from "@/components/ui/button";
import React from "react";

export default function CTA() {
	return (
		<section className="relative overflow-hidden border">
			<div className="container lg:flex lg:items-center lg:justify-between gap-16">
				<div className="space-y-8 flex-center flex-col gap-1.5 py-12">
					<div className="space-y-1.5">
						<h2 className="text-3xl font-semibold">Start Your Real Estate Journey Today</h2>
						<p className="text-sm font-medium text-grey-50 pt-2">
							Your dream property is just a click away. Whether you're looking for a new home, a
							strategic investment, or expert real estate advice, Estatein is here to assist you
							every step of the way. Take the first step towards your real estate goals and explore
							our available properties or get in touch with our team for personalized assistance.
						</p>
					</div>
					<img
						src="/assets/svg/abstract-design.svg"
						alt=""
						className="absolute transform -z-10 -scale-x-100 -bottom-9 -right-11 scale-125"
					/>
					<img
						src="/assets/svg/abstract-design.svg"
						alt=""
						className="absolute -z-10 -left-16 top-8 scale-125 rotate-90"
					/>
				</div>
				<div className="w-full lg:w-1/2 text-end">
					<Button className="w-full lg:w-max py-6 ">Explore Properties</Button>
				</div>
			</div>
		</section>
	);
}
