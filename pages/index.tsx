/**
 * @description  Pagina home del sitio web.
 */

import { useState } from "react";
import Image from "next/image";
import Layout from "components/Layout/Base";
import Hero from "components/Hero/Base";
import SplashCard from "components/Cards/SplashCard";
import SimpleSection from "components/Sections/Base";
import Button from "components/Button/Simple";
import { CATALOGO } from "data/catalogo";
import Car from "assets/Images/Iconos/svgs/car.svg";
import ArrowRight from "assets/Images/Iconos/svgs/arrowRight_Black.svg";
import ArrowLeft from "assets/Images/Iconos/svgs/arrowLeft_Black.svg";
import ArrowRightWhite from "assets/Images/Iconos/svgs/arrowRight_White.svg";
import Huevo from "assets/Images/Iconos/pngs/huevo-min.png";
import Lombris from "assets/Images/Iconos/pngs/hoja-min.png";
import Mariposa from "assets/Images/Iconos/pngs/mariposa-min.png";

const Index = (): JSX.Element => {
  const [iterador, setIterador] = useState(0);

  const nextDesign = () => {
    if (iterador === CATALOGO.length) {
      setIterador((iterador) => iterador - CATALOGO.length);
    } else {
      setIterador((iterador) => iterador + 1);
    }
  };

  const previousDesign = () => {
    if (iterador === 0) {
      setIterador((iterador) => iterador + CATALOGO.length);
    } else {
      setIterador((iterador) => iterador - 1);
    }
  };

  return (
    <Layout
      title="Cocheras Electricas Torreon - Reparacion de cocheras electricas en torreon - Mantenimiento de cocheras electricas en torreon"
      metadescription=""
    >
      <Hero
        text="Planificamos. Aplicamos pruebas de control de calidad. Entregamos a tiempo."
        title="Creamos Cocheras Eléctricas En Torreón, Goméz Palacio y Lerdo."
      />

      <SplashCard
        definicion="Conjunto de actividades planificadas de un número de personas y recursos coordinados para conseguir un objetivo."
        titulo="Proceso"
        referencia="Del lat. processus."
      >
        <div className="flex flex-row items-center px-4 md:px-8 xl:px-4 gap-x-2 md:gap-x-5 xl:gap-x-10">
          <Image
            className="w-8 h-8 md:w-12 md:h-12"
            alt="Icono de huevo"
            src={Huevo}
          />
          <Image
            className="w-8 h-8 md:w-12 md:h-12"
            alt="Icono de lombris"
            src={Lombris}
          />
          <Image
            className="w-12 h-12 md:w-16 md:h-16"
            alt="Icono de mariposa"
            src={Mariposa}
          />
        </div>
      </SplashCard>

      <div id="proceso"></div>
      <SimpleSection
        color="black"
        subtitle="01 - Planificación"
        title="Planificamos con exactitud todos los proyectos gracias a nuestra experiencia y algoritmo secreto."
      />

      <SimpleSection
        color="white"
        subtitle="02 - Control de calidad"
        title="Aplicamos pruebas de control de calidad profesional antes, durante y después de cada trabajo."
      ></SimpleSection>

      <SimpleSection
        color="green"
        subtitle="03 - Puntualidad"
        title="Aceptamos una cantidad de trabajo limitada para nunca descuidar la calidad y tiempo de entrega que deseamos y prometemos."
      />

      <div
        id="diseño"
        className="xl:h-screen bg-black flex flex-col xl:flex-row justify-center items-center gap-y-6 xl:gap-x-6 text-white px-6 xl:px-32 py-10 md:py-20"
      >
        <div className="flex flex-col gap-y-4 xl:w-2/4">
          <div className="flex flex-col gap-y-2">
            <h4 className="capitalize">Id del diseño (anota tus favoritos):</h4>
            <p className="text-2 md:text-4">{CATALOGO[iterador].id}</p>
          </div>

          <div className="flex flex-col gap-y-2">
            <h4 className="capitalize">
              Costo aproximado por medidas estándar (1-3 carros):
            </h4>

            <div className="flex flex-row items-center gap-x-2">
              <p className="text-2 md:text-4">{CATALOGO[iterador].costo1}</p>
              <Image className="w-6 xl:w-8" alt="Carro cochera 1" src={Car} />
            </div>

            <div className="flex flex-row items-center gap-x-2">
              <p className="text-2 md:text-4">{CATALOGO[iterador].costo2}</p>
              <Image className="w-6 xl:w-8" alt="Carro cochera 1" src={Car} />
              <Image className="w-6 xl:w-8" alt="Carro cochera 2" src={Car} />
            </div>

            <div className="flex flex-row items-center gap-x-2">
              <p className="text-2 md:text-4">{CATALOGO[iterador].costo3}</p>
              <Image className="w-6 xl:w-8" alt="Carro cochera 1" src={Car} />
              <Image className="w-6 xl:w-8" alt="Carro cochera 2" src={Car} />
              <Image className="w-6 xl:w-8" alt="Carro cochera 3" src={Car} />
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="flex flex-row gap-x-2 justify-start items-center absolute left-7 md:left-1/3 bottom-1">
            <Button
              color="white"
              size="small"
              onClick={previousDesign}
              type="button"
              iconRight={ArrowLeft}
            />
            <Button
              color="white"
              size="small"
              onClick={nextDesign}
              type="button"
              iconRight={ArrowRight}
            />
          </div>

          <Image
            className="rounded-lg h-40 md:h-70 xl:h-90"
            alt="Cochera electrica"
            src={CATALOGO[iterador].img}
          />
        </div>
      </div>

      <SplashCard
        definicion="Tardaremos entre 1-4 días en preparar tu presupuesto luego de que nos envies los IDs de los modelos que gustas cotizar por WhatsApp."
        titulo="Presupuesto"
      >
        <a
          className="mt-2"
          href="https://api.whatsapp.com/send?phone=+528711413457&text=Buenas,%20necesito%20la%20cotizacion%20de%20los%20siguientes%20modelos:"
        >
          <Button
            color="black"
            type="button"
            size="normal"
            text="Solicitar Cotización"
            iconRight={ArrowRightWhite}
          />
        </a>
      </SplashCard>
    </Layout>
  );
};

export default Index;
