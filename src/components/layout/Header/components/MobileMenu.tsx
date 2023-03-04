"use client";

import { XIcon } from "@/components/common/Icons";
import clsx from "clsx";

interface MobileMenuProps {
	className?: string;
	isOpen: boolean;
	setIsOpen: (value: boolean) => void;
}

// TODO this component cause hydration error

function MobileMenu({
	className = "",
	isOpen = false,
	setIsOpen,
}: MobileMenuProps) {
	return (
		<div
			className={clsx(
				isOpen ? "scale-100" : "scale-0",
				isOpen ? "opacity-100" : "opacity-0",
				"fixed-middle",
				"w-[96vw] h-[96vh]",
				"bg-white",
				"drop-shadow-2xl",
				"bounce",
				"rounded-lg",
			)}
		>
			<div onClick={() => setIsOpen(false)}>
				<XIcon size={32} className="cursor-pointer" />
			</div>
			MobileMenu
		</div>
	);
}

export { MobileMenu };
