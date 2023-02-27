import { Itim } from "next/font/google";

const itim = Itim({ subsets: ["latin"], weight: ["400"] });

function Logo({ className = "" }) {
	return (
		<div
			className={`select-none text-2xl text-purple-500 ${className} ${itim.className}`}
		>
			{/* <span className="max-sm:hidden">quadrii.co</span> */}
			<span>quadrii.co</span>
			{/* <span className="sm:hidden">q</span> */}
		</div>
	);
}

export { Logo };
