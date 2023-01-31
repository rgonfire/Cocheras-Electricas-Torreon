import Link from "next/link";
import Image from "next/image";
import Button from "components/Button";
import LeftArrow from "assets/icons/right-arrow-white.svg";
import NavbarMobile from "components/Navbar/mobile";

const index = (): JSX.Element => {
  return (
    <>
      <nav className="text-white bg-black hidden z-10 fixed w-screen flex-row justify-between items-center px-8 sm:flex xl:h-8">
        {/* Left side */}
        <div>
          <Link href="/" className="font-bold text-3">
            CET
          </Link>
        </div>

        {/* Right side */}
        <div>
          <ul className="flex flex-row justify-center items-center gap-x-4">
            <li>
              <Link href="#proceso">Proceso</Link>
            </li>
            <li>
              <Link href="#diseño">Diseños</Link>
            </li>
            <li>
              <Link href="#presupuesto">Solicitar Presupuestos</Link>
            </li>
          </ul>
        </div>
      </nav>

      <NavbarMobile />
    </>
  );
};

export default index;
