import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Hamburguer from "assets/Images/Iconos/svgs/menu-white.svg";
import CloseMenu from "assets/Images/Iconos/svgs/close-white.svg";

const Mobile = (): JSX.Element => {
  const [active, setActive] = useState(false);

  const showMenu = () => {
    setActive((prevState) => !prevState);
  };

  return (
    <nav>
      {/* Whitout Click */}
      <div
        className={
          active
            ? "hidden"
            : "fixed w-screen z-10 py-1 flex flex-row gap-x-2 justify-between items-center text-white bg-black px-5 sm:hidden"
        }
      >
        <div>
          <Link href="/" className="font-bold text-3">
            CET
          </Link>
        </div>

        <div>
          <Image alt="Hamburguer menu" src={Hamburguer} onClick={showMenu} />
        </div>
      </div>

      {/* Clicked */}
      <div
        className={
          active
            ? "bg-black z-10 h-2/5 flex flex-col text-white justify-center fixed inset-0"
            : "hidden"
        }
      >
        <Image
          onClick={showMenu}
          alt="Close Menu"
          className="absolute top-3 right-5 cursor-pointer w-2"
          src={CloseMenu}
        />

        <ul className="flex flex-col justify-center items-center gap-y-4 text-3">
          <li>
            <Link href="#proceso">Proceso</Link>
          </li>
          <li>
            <Link href="#diseños">Diseños</Link>
          </li>
          <li>
            <Link href="#presupuesto">Solicitar Presupuestos</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Mobile;
