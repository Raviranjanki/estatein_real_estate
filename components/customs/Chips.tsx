import Image from "next/image";
import React from "react";

interface Props {
	chips: { image: string; content: string }[];
}

export default function Chips({ chips }: Props) {
	return (
		<div className="flex flex-wrap gap-2">
			{chips.map((chip) => (
				<div className="border rounded-full flex items-center gap-1 py-1 px-3 bg-grey-600">
					<Image src={chip.image} alt={chip.content} width={20} height={20} />
					<span className="text-sm font-medium">{chip.content}</span>
				</div>
			))}
		</div>
	);
}
