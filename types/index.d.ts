interface PropertyDetail {
	id: number;
	title: string;
	description: string;
	price: string;
	contact: string;
	image: string;
}

interface SliderActions {
	prevSlide: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	nextSlide: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	currentSlide: number;
	totalSlides: number;
	prevSlideButtonDisabled: boolean;
	nextSlideButtonDisabled: boolean;
}

interface SliderProps {
	children: React.ReactNode;
	className?: string;
	slidesToScroll?: number;
	slidesToShow?: number;
	responsive?: { [key: string]: { items: number } };
	autoPlay?: boolean;
	autoPlaySpeed?: number;
	gap?: number;
	infinite?: boolean;
	getSliderActionsAndState?: (props: SliderActionsAndState) => void;
}
