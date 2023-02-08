import { TypeSplashCard } from "../types/splashcard.types";

const SplashCard = ({
  titulo,
  referencia,
  definicion,
  children,
}: TypeSplashCard): JSX.Element => {
  return (
    <div className="flex flex-col justify-center bg-white my-16">
      <div className="rounded-3xl border border-black flex flex-col justify-center mx-4 md:mx-10 xl:mx-40 xl:px-20 py-8 xl:py-20">
        <div className="flex flex-col px-4 md:px-8 xl:px-4 gap-y-1">
          <h3 className="font-bold">{titulo}</h3>
          <p className="italic">{referencia}</p>
          <p>{definicion}</p>
          {children}
        </div>
      </div>
    </div>
  );
};

export default SplashCard;
