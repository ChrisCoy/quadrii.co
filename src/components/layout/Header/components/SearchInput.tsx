"use client";

import { clsx as cx } from "clsx";
import { MagnifyingGlass } from "phosphor-react";

function SearchInput() {
	return (
		<label htmlFor="header-search-input" className="relative">
			<input
				type="text"
				id="header-search-input"
				className={cx(
					"placeholder:italic",
					"placeholder:text-gray-300",
					"pl-4 pr-9 py-1",
					"bg-gray-100/30",
					"rounded-sm",
					"w-full",
					"[&:focus]:outline-purple-500",
				)}
				placeholder="Pesquisar"
			/>
			<button
				type="submit"
				className={cx(
					"absolute-middle-y right-2 cursor-pointer",
					"transition",
					"hover:scale-110",
				)}
			>
				<MagnifyingGlass size={24} />
			</button>
		</label>
	);
}

export { SearchInput };
