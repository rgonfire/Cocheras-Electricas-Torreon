/**
 * @description Tipado de splashcard
 */

import { StaticImageData } from "next/image";

export type TypeSplashCard = {
  titulo: string;
  referencia?: string;
  definicion: string;
  srcImg1?: StaticImageData;
  srcImg2?: StaticImageData;
  srcImg3?: StaticImageData;
  children?: any;
};
