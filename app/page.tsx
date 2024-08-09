import CTA from "@/components/home/CTA";
import FrequentlyAskedQuestions from "@/components/home/FrequentlyAskedQuestions";
import HeroSection from "@/components/home/HeroSection";
import Properties from "@/components/home/Properties";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
	return (
		<main className="py-6 space-y-6">
			<HeroSection />
			<Properties />
			<Testimonials />
			<FrequentlyAskedQuestions />
			<CTA />
		</main>
	);
}
