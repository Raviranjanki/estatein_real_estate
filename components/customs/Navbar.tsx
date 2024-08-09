import Image from "next/image";
import Link from "next/link";
import HeaderBanner from "./Header";
import { Button } from "../ui/button";
import ActiveLink from "./ActiveLink";
import { Icons } from "./Icons";

export default function Navbar() {
	return (
		<HeaderBanner>
			<nav className="h-[72px] xl:h-24 flex-between bg-grey-600 border">
				<div className="container flex-between">
					<h1>
						<Link href="/" className="flex items-center gap-2">
							<Image src="/assets/images/logo.png" alt="logo" width={32} height={32} />
							<span>Estatein</span>
						</Link>
					</h1>
					<ul className="hidden lg:flex items-center gap-8">
						<ActiveLink href="/">Home</ActiveLink>
						<ActiveLink href="/about-us">About Us</ActiveLink>
						<ActiveLink href="/properties">Properties</ActiveLink>
						<ActiveLink href="/services">Services</ActiveLink>
					</ul>
					<div className="lg:hidden">
						<Icons.hamburger className="h-8 w-8" />
					</div>
					<Button className="hidden lg:flex px-6 py-6 rounded-lg bg-grey-700 border">
						Contact Us
					</Button>
				</div>
			</nav>
		</HeaderBanner>
	);
}
