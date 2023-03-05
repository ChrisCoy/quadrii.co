import { CarouselOfCards } from "@/components/Feature/CarouselOfCards";
import { Container } from "@/components/layout/Container";

import Image from "next/image";

export default function Home() {
  return <Container className={"bg-gray-300"}>
    <CarouselOfCards
      className="w-10/12 mx-auto"
      slides={[
        "/example/slide-1.png",
        "/example/slide-2.png",
        "/example/slide-3.png",
        "/example/slide-4.png",
      ]}
      options={{loop: true}}
    />
  </Container>
}