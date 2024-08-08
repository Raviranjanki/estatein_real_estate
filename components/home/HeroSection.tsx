import { Button } from "@/components/ui/button";
import { services, stats } from "@/constants";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";

export default function HeroSection() {
	return (
		<section>
			<div className="container">
				<div className="relative h-full pb-10 lg:hidden">
					<Image
						src="/assets/images/hero-image.png"
						alt="hero-image"
						height={1000}
						width={1000}
						className="rounded-xl border border-grey-400"
					/>
					<Image
						src="/assets/svg/discover.svg"
						alt="hero-image"
						height={500}
						width={500}
						className="rounded-xl absolute bottom-0 left-0 size-24"
					/>
				</div>
				<div className="grid grid-cols-1 lg:grid-cols-11 gap-16 pb-3">
					<div className="lg:col-span-5 my-auto">
						<div className="space-y-3 xl:space-y-5 mt-6 lg:mt-0">
							<h2 className="text-3xl font-semibold lg:text-4xl xl:text-5xl xl:leading-tight 4xl:text-6xl 4xl:leading-snug">
								Discover Your Dream Property with Estatein
							</h2>
							<p className="text-sm font-medium text-grey-50 xl:text-base 4xl:text-lg">
								Your journey to finding the perfect property begins here. Explore our listings to
								find the home that matches your dreams.
							</p>
						</div>
						<div className="flex flex-wrap gap-4 lg:flex-nowrap h-max my-8 xl:my-10">
							<Button variant="outline" className="p-6 bg-transparent w-full lg:w-max">
								Learn More
							</Button>
							<Button className="p-6 bg-purple-700 text-white-50 w-full lg:w-max">
								Browse Properties
							</Button>
						</div>
						<div className="flex flex-wrap gap-4">
							{stats.map((stat) => (
								<div className="flex-center px-4 lg:items-start flex-col grow gap-1 border rounded-lg bg-grey-600 py-4">
									<span className="text-3xl font-bold">{stat.count}+</span>
									<span className="text-sm font-medium text-center text-grey-50">{stat.title}</span>
								</div>
							))}
						</div>
					</div>
					<div className="relative h-full hidden lg:block lg:col-span-6">
						<Image
							src="/assets/images/hero-image.png"
							alt="hero-image"
							height={1000}
							width={1000}
							className="h-full object-cover"
						/>
						<Image
							src="/assets/svg/discover.svg"
							alt="hero-image"
							height={500}
							width={500}
							className="rounded-xl absolute bottom-0 left-0 size-24 md:top-20 md:-left-16 xl:size-32"
						/>
					</div>
				</div>
			</div>
			<div className="mt-12 md:mt-0 flex flex-wrap bg-grey-700 gap-4 p-3 shadow-[0_0_30px_rgb(0,0,0,0.12)] shadow-grey-500">
				{services.map((service) => (
					<div className="relative flex-center w-28 flex-col grow gap-2 border rounded-lg bg-grey-600 py-4 xl:py-8">
						<div className="w-full flex justify-center gap-3 px-6 xl:justify-center">
							<service.icon className="xl:size-16" />
						</div>
						<ArrowTopRightIcon className="absolute top-4 right-4 size-8 text-grey-300 -mt-1" />
						<span className="text-sm xl:text-base text-center font-medium">{service.title}</span>
					</div>
				))}
			</div>
		</section>
	);
}
