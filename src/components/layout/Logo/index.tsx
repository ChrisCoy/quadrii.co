import { Itim } from "@next/font/google";

const itim = Itim({ subsets: ["latin"], weight: ["400"] });

function Logo({ className = "" }) {
	return (
		<div
			className={`select-none text-2xl text-purple-500 ${className} ${itim.className}`}
		>
			quadrii.co
		</div>
	);
}

export { Logo };
