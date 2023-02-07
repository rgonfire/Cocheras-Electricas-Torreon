/**
 * @description  Pagina home del sitio web.
 */

import { useState } from "react";
import Image from "next/image";
import Layout from "components/Layout/Index";
import Hero from "components/Hero/index";
import SplashCard from "components/Cards/SplashCard";
import SimpleSection from "components/Sections/Index";
import Button from "components/Button/Index";
import { CATALOGO } from "data/catalogo";
import Car from "assets/Images/Iconos/svgs/car.svg";
import ArrowRight from "assets/Images/Iconos/svgs/arrowRight_Black.svg";
import ArrowLeft from "assets/Images/Iconos/svgs/arrowLeft_Black.svg";
import ArrowRightWhite from "assets/Images/Iconos/svgs/arrowRight_White.svg";
// import Huevo from "assets/Images/Iconos/pngs/huevo-min.png";
// import Lombris from "assets/Images/Iconos/pngs/hoja-min.png";
// import Mariposa from "assets/Images/Iconos/pngs/mariposa-min.png";

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
      metadescription="Los mejores ahora en torreon coahuila"
    >
      <Hero
        text="Planificamos. Aplicamos pruebas de control de calidad. Entregamos a tiempo."
        title="Creamos Cocheras Eléctricas En Torreón, Goméz Palacio y Lerdo."
      />

      {/* <div className="h-screen">
        <SplashCard
          definicion="Conjunto de actividades planificadas de un número de personas y recursos coordinados para conseguir un objetivo."
          titulo="Proceso"
          referencia="Del lat. processus."
        >
          <div className="flex flex-row items-center gap-x-10">
            <Image className="w-12 h-12" alt="Imagen" src={Huevo} />
            <Image className="w-12 h-12" alt="Imagen" src={Lombris} />
            <Image className="w-16 h-16" alt="Imagen" src={Mariposa} />
          </div>
        </SplashCard>
      </div> */}

      {/* <div id="proceso"></div>
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
        className="h-screen bg-black flex flex-row justify-center items-center gap-x-6 text-white px-32 py-10"
      >
        <div className="flex flex-col gap-y-2 xl:w-2/4">
          <div className="flex flex-col gap-y-2">
            <h4 className="capitalize">Id del diseño (anota tus favoritos):</h4>
            <p>{CATALOGO[iterador].id}</p>
          </div>

          <div className="flex flex-col gap-y-2">
            <h4 className="capitalize">
              Costo aproximado por medidas estándar (1-3 carros):
            </h4>

            <div className="flex flex-row items-center gap-x-2">
              <p>{CATALOGO[iterador].costo1}</p>
              <Image className="w-8" alt="Carro" src={Car} />
            </div>

            <div className="flex flex-row items-center gap-x-2">
              <p>{CATALOGO[iterador].costo2}</p>
              <Image className="w-8" alt="Carro" src={Car} />
              <Image className="w-8" alt="Carro" src={Car} />
            </div>

            <div className="flex flex-row items-center gap-x-2">
              <p>{CATALOGO[iterador].costo3}</p>
              <Image className="w-8" alt="Carro" src={Car} />
              <Image className="w-8" alt="Carro" src={Car} />
              <Image className="w-8" alt="Carro" src={Car} />
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="flex flex-row gap-x-2 justify-start items-center absolute xl:left-1/3 bottom-1">
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
            className="rounded-lg w-100 h-90"
            alt="Cochera electrica"
            src={CATALOGO[iterador].img}
          />
        </div>
      </div>

      <div className="h-screen">
        <SplashCard
          definicion="Tardaremos entre 1-4 días en preparar tu presupuesto luego de que nos envies los IDs de los modelos que gustas cotizar por WhatsApp."
          titulo="Presupuesto"
        >
          <a href="https://api.whatsapp.com/send?phone=+528711413457&text=Buenas,%20necesito%20la%20cotizacion%20de%20los%20siguientes%20modelos:">
            <Button
              color="black"
              type="button"
              size="default"
              text="Solicitar Cotización"
              iconRight={ArrowRightWhite}
            />
          </a>
        </SplashCard>
      </div> */}
    </Layout>
  );
};

export default Index;
