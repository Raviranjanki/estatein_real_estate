import FrequentlyAskedQuestionsSlider from "@/components/slider/FrequentlyAskedQuestionsSlider";
import { Icons } from "../customs/Icons";

export default function FrequentlyAskedQuestions() {
	return (
		<section className="container py-5">
			<Icons.star2 className="-ml-2 mb-1" />
			<h2 className="text-3xl font-semibold">Frequently Asked Questions</h2>
			<p className="text-sm font-medium text-grey-50 pt-2">
				Find answers to common questions about Estatein's services, property listings, and the real
				estate process. We're here to provide clarity and assist you every step of the way.
			</p>
			<FrequentlyAskedQuestionsSlider />
		</section>
	);
}
