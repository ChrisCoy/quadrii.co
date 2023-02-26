import { clsx as cx } from "clsx";
import { Container } from "../Container";
import { Logo } from "../Logo";
import { SearchInput } from "./components/SearchInput";

function Header() {
	return (
		<div className="h-20 shadow-[2px_0px_5px_-2px_rgba(0,0,0,0.3)]">
			<Container className="flex h-20 items-center justify-between gap-4">
				<Logo />
				<nav className="flex gap-4">
					<a href="">Mangás/Quadrinhos</a>
					<a href="">Novels</a>
					<a href="">Games</a>
					<a href="">Feed</a>
					<a href="">Generos</a>
					<a href="">Sobre </a>
				</nav>

				<div className="flex items-center gap-4">
					<form>
						<SearchInput />
					</form>
					<button className="mr-4 p-1 px-2 hover:opacity-50">
						Entrar
					</button>
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
		</div>
	);
}

export { Header };
