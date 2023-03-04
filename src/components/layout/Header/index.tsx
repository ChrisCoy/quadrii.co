"use client";

import { clsx as cx } from "clsx";
import { Container } from "../Container";
import { Logo } from "../Logo";
import { SearchInput } from "./components/SearchInput";
import { List, MagnifyingGlassIcon } from "../../common/Icons";
import { faxios } from "@/services/faxios";
import { useState } from "react";
import { MobileMenu } from "./components/MobileMenu";

function NavigatorLinks({ className = "" }) {
	return (
		<nav className={cx("flex gap-4 [&>a:hover]:text-purple-500", className)}>
			<a href="">Mangás/Quadrinhos</a>
			<a href="">Novels</a>
			<a href="">Games</a>
			<a href="">Feed</a>
			<a href="">Generos</a>
		</nav>
	);
}

function Header() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header
			className={cx(
				"flex flex-col justify-around",
				"relative pt-3 shadow-[2px_0px_5px_-2px_rgba(0,0,0,0.3)]",
				"lg:h-20 lg:py-3",
			)}
		>
			<MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />

			<Container className={cx("gap-4  flex justify-between items-center")}>
				<Logo />
				<NavigatorLinks className={cx("max-lg:hidden")} />
				<div className={cx("flex items-center gap-4 max-md:hidden")}>
					<form>
						<SearchInput />
					</form>
					<button className="mr-4 p-1 px-2 hover:text-purple-500">
						Entrar
					</button>
					<button
						className={cx(
							"rounded-full",
							"bg-purple-500",
							"p-1 px-2",
							"font-bold text-white",
							"hover:bg-purple-700",
						)}
					>
						Publique
					</button>
				</div>
				<div className="flex gap-4 md:hidden [&>*]:cursor-pointer">
					<MagnifyingGlassIcon size={24} />
					<List size={24} onClick={() => setIsOpen(true)} />
				</div>
			</Container>
			<NavigatorLinks
				className={cx(
					"lg:hidden w-full",
					"mt-3 py-2 border-t-2 border-gray-100/30",
					"overflow-auto min-w-20 px-4",

					// "max-sm:hidden"
				)}
			/>
		</header>
	);
}

export { Header };
