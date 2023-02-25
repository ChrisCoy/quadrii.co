import { Container } from "../Container";
import { Logo } from "../Logo";

function Header() {
  return (
    <div className="h-20 shadow-[2px_0px_5px_-2px_rgba(0,0,0,0.3)]">
      <Container className="flex h-20 justify-between items-center gap-4">
        <Logo />
        <nav className="">
          <a href="">Mangás/Quadrinhos</a>
          <a href="">Novels</a>
          <a href="">Games</a>
          <a href="">Feed</a>
          <a href="">Generos</a>
          <a href="">Sobre</a>
        </nav>
      </Container>
    </div>
  );
}

export { Header };
