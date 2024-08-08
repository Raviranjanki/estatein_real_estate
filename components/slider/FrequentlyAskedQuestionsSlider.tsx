"use client";

import { frequentlyAskedQuestions } from "@/constants";
import { Button } from "../ui/button";
import Slider from "./Slider";

export default function FrequentlyAskedQuestionsSlider() {
	const settings: Omit<SliderProps, "children"> = {
		slidesToShow: 1,
		responsive: {
			0: {
				items: 1,
			},
			1400: {
				items: 3,
			},
		},
	};

	return (
		<Slider {...settings}>
			{frequentlyAskedQuestions.map((frequentlyAskedQuestion) => (
				<FrequentlyAskedQuestion key={frequentlyAskedQuestion.id} {...frequentlyAskedQuestion} />
			))}
		</Slider>
	);
}

type FrequentlyAskedQuestionProps = (typeof frequentlyAskedQuestions)[0];

const FrequentlyAskedQuestion = ({ question, answer }: FrequentlyAskedQuestionProps) => {
	return (
		<div className="space-y-6 border p-8 rounded-lg mt-10 flex flex-col justify-between">
			<div className="space-y-1.5">
				<h2 className="text-lg font-semibold">{question}</h2>
				<p className="text-sm font-medium text-grey-50">{answer}</p>
			</div>
			<Button className="w-full py-6 bg-grey-600" variant="outline">
				Read More
			</Button>
		</div>
	);
};
