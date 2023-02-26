import { clsx as cx } from "clsx";
import { Container } from "../Container";
import { Logo } from "../Logo";
import { SearchInput } from "./components/SearchInput";

function NavigatorLinks({ className = "" }) {
	return (
		<nav className={cx("flex gap-4 [&>a:hover]:opacity-50", className)}>
			<a href="">Mangás/Quadrinhos</a>
			<a href="">Novels</a>
			<a href="">Games</a>
			<a href="">Feed</a>
			<a href="">Generos</a>
		</nav>
	);
}

function Header() {
	return (
		<header
			className={cx(
				"flex flex-col justify-around",
				"relative pt-3 shadow-[2px_0px_5px_-2px_rgba(0,0,0,0.3)]",
				"lg:h-20 lg:py-3",
			)}
		>
			<Container className={cx("gap-4  flex justify-between items-center")}>
				<Logo />
				<NavigatorLinks className={cx("max-lg:hidden")} />
				<div className={cx("flex items-center gap-4")}>
					<form>
						<SearchInput />
					</form>
					<button className="mr-4 p-1 px-2 hover:opacity-50">Entrar</button>
					<button
						className={cx(
							"rounded-full",
							"bg-purple-500",
							"p-1 px-2",
							"font-bold text-white",
							"hover:opacity-80",
						)}
					>
						Publique
					</button>
				</div>
			</Container>
			<NavigatorLinks
				className={cx(
					"lg:hidden w-full justify-center",
					"mt-3 py-2 border-t-2 border-gray-100/30",
					"overflow-auto min-w-20 px-4",
				)}
			/>
		</header>
	);
}

export { Header };
