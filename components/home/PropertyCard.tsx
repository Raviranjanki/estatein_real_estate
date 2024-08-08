import { Button } from "@/components/ui/button";
import { chips } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Chips from "../customs/Chips";

interface Props {
	property: PropertyDetail;
}

export default function PropertyCard({ property }: Props) {
	return (
		<div className="mt-12 flex flex-col gap-4 border rounded-lg p-6">
			<figure className="w-full">
				<Image
					src={property.image}
					alt={property.title}
					height={500}
					width={500}
					className="rounded-lg"
					quality={100}
				/>
			</figure>
			<div>
				<h2 className="text-xl font-semibold">{property.title}</h2>
				<p className="text-sm py-1 font-medium text-grey-50 line-clamp-2">
					{property.description}
					<Link href="#" className="ml-1 text-white-50 underline underline-offset-1">
						Read More
					</Link>
				</p>
			</div>
			<Chips chips={chips} />
			<div className="w-full flex-between gap-2">
				<div className="flex flex-col gap-1">
					<span className="text-grey-50 text-sm font-medium">Price</span>
					<span className="text-[1.13rem] font-semibold">{property.price}</span>
				</div>
				<Button className="h-full px-7">View Property Details</Button>
			</div>
		</div>
	);
}
