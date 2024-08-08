import TestimonialsSlider from "@/components/slider/TestimonialsSlider";
import { testimonials } from "@/constants";
import Image from "next/image";
import { Icons } from "../customs/Icons";

export default function Testimonials() {
	return (
		<section className="container py-10">
			<Icons.star2 className="-ml-2 mb-1" />
			<h2 className="text-3xl font-semibold">What Our Clients Say</h2>
			<p className="text-sm font-medium text-grey-50 pt-2">
				Read the success stories and heartfelt testimonials from our valued clients. Discover why
				they chose Estatein for their real estate needs.
			</p>
			<TestimonialsSlider />
		</section>
	);
}

export const Testimonial = ({ description, title, user, star }: (typeof testimonials)[0]) => {
	return (
		<div className="space-y-6 border p-8 rounded-lg">
			<div className="flex items-center space-x-2">
				{Array.from({ length: star }).map((_, index) => (
					<div key={index} className="border size-8 flex-center p-1.5 rounded-full bg-grey-600">
						<Icons.star className="" />
					</div>
				))}
			</div>

			<div className="space-y-1.5">
				<h2 className="text-lg font-semibold">{title}</h2>
				<p className="text-sm font-medium">{description}</p>
			</div>
			<div className="flex items-center space-x-4 border-grey-400">
				<div className="flex-shrink-0">
					<Image
						src={user.avatar}
						alt={user.name}
						height={50}
						width={50}
						quality={100}
						className="rounded-full"
					/>
				</div>
				<div className="flex-1">
					<h3 className="text-base font-medium">{user.name}</h3>
					<p className="text-sm font-medium text-grey-50">{user.location}</p>
				</div>
			</div>
		</div>
	);
};
