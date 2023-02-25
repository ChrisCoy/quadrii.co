import { ReactNode } from "react";

interface SearchInputProps {
  children?: ReactNode;
  className?: string;
}

function SearchInput({children, className = ""}:SearchInputProps) {
  return(
    <div className={`${className}`}>
      {children}
    </div>
  )
};

export { SearchInput }