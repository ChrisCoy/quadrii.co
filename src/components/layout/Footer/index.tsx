import Image from "next/image";
import Link from "next/link";

function Footer() {
  return <footer className={"w-full h-auto flex flex-col"}>
    <div className={"w-full h-auto py-4 flex items-center justify-center bg-[url('/images/banner_footer.png')] bg-cover bg-center"}>
      <div className={"w-auto flex flex-col gap-2 items-center justify-center"}>
        <Image
          className={"select-none"}
          src={"/images/Logotipo.png"}
          width={180}
          height={180}
          alt={"Footer logo"}
        />

        <Image
          className={"select-none"}
          src={"/images/emojis.png"}
          width={200}
          height={400}
          alt={"emojis"}
        />
      </div>
    </div>

    <div className={"flex flex-col items-center justify-center"}>
      <ul className={"flex gap-3 w-full justify-center p-5"}>
        <li className={"text-xl font-bold text-purple-500"}>
          <Link href="#">Lorem</Link>
        </li>

        <li className={"text-xl font-bold text-purple-500"}>
          <Link href="#">Lorem</Link>
        </li>

        <li className={"text-xl font-bold text-purple-500"}>
          <Link href="#">Lorem</Link>
        </li>

        <li className={"text-xl font-bold text-purple-500"}>
          <Link href="#">Lorem</Link>
        </li>
      </ul>

      <div className={"py-3 flex flex-col items-center justify-center"}>
        <p className={"text-center flex gap-1 items-center justify-center align-middle"}>
          <span>Made width</span>
          <Image src="/icons/Coffee.png" width={20} height={20} alt="coffe icon" />
          <span>and</span>
          <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M8 1.22644C12.4381 -3.03141 23.5344 4.41937 8 14C-7.53442 4.4203 3.56188 -3.03141 8 1.22644Z" fill="#6A563D" /></svg>
        </p>

        <small>&copy; {new Date().getFullYear()} quadrii.co</small>
      </div>
    </div>
  </footer>;
}

export { Footer };
