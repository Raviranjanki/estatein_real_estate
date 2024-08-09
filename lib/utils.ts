import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function throttle(func: Function, delay: number) {
	let prev = 0;
	return (args?: any) => {
		let now = new Date().getTime();

		if (now - prev > delay) {
			prev = now;
			return func(args);
		}
	};
}
