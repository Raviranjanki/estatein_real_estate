import { properties } from "@/constants";
import { Icons } from "../customs/Icons";
import Slider from "../slider/Slider";
import PropertyCard from "./PropertyCard";

export default function Properties() {
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
		<section className="container py-5">
			<Icons.star2 className="-ml-2 mb-1" />
			<h2 className="text-3xl font-semibold">Featured Properties</h2>
			<p className="text-sm font-medium text-grey-50 pt-2">
				Explore our handpicked selection of featured properties. Each listing offers a glimpse into
				exceptional homes and investments available through Estatein.
			</p>
			<Slider {...settings}>
				{properties.map((property) => (
					<PropertyCard property={property} key={property.id} />
				))}
			</Slider>
		</section>
	);
}
