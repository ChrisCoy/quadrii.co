import { Itim } from "next/font/google";
import Link from "next/link";

const itim = Itim({ subsets: ["latin"], weight: ["400"] });

function Logo({ className = "" }) {
	return (
		<Link
			className={`select-none cursor-pointer text-2xl text-purple-500 ${className} ${itim.className}`}
			href="/"
		>
			{/* <span className="max-sm:hidden">quadrii.co</span> */}
			<span>quadrii.co</span>
			{/* <span className="sm:hidden">q</span> */}
		</Link>
	);
}

export { Logo };
