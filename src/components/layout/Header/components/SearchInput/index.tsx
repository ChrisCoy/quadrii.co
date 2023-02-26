import { clsx as cx } from "clsx";

function SearchInput() {
	return (
		<label
			htmlFor="header-search-input"
			className={cx("bg-gray-100/30", "px-4 py-2", "rounded-sm")}
		>
			<input
				type="text"
				id="header-search-input"
				className={cx(
					"bg-transparent",
					"focus:outline-none",
					"placeholder:italic",
					"placeholder:text-gray-300",
				)}
				placeholder="Pesquisar"
			/>
		</label>
	);
}

export { SearchInput };
