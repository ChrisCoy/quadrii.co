import { Itim } from "@next/font/google";

const itim = Itim({ subsets: ["latin"], weight: ["400"]});

interface LogoProps {
  className?: string;
}

function Logo({className = ""}:LogoProps) {
  return(
    <div className={`${className}`}>
      
    </div>
  )
};

export { Logo }