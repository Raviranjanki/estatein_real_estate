"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface ActiveLinkProps {
	href: string;
	children: React.ReactNode;
}

export default function ActiveLink({ children, href }: ActiveLinkProps) {
	const pathname = usePathname();

	const isActive = pathname === href;

	return (
		<li>
			<Link
				href={href}
				className={`text-lg font-medium ${
					isActive ? "bg-grey-700 border px-6 py-3.5 rounded-lg" : ""
				}`}
			>
				{children}
			</Link>
		</li>
	);
}
