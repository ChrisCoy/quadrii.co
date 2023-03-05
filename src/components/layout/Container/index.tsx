import { ReactNode } from "react";
import cx from "clsx";

interface ContainerProps {
	children?: ReactNode;
	className?: string;
}

function Container({ children, className = "" }: ContainerProps) {
	return (
		<div
			className={cx("mx-auto flex w-full max-w-screen-xl gap-4 px-4", className)}
		>
			{children}
		</div>
	);
}

export { Container };
