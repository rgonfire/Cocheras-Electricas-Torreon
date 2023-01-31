import { TypeSplashCard } from "../types/splashcard.types";

const SplashCard = ({
  titulo,
  referencia,
  definicion,
  children,
}: TypeSplashCard): JSX.Element => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-white">
      <div className="h-3/4 rounded-3xl border border-black flex flex-col justify-center gap-y-6 mx-40 xl:px-20">
        <div className="w-4/5">
          <h3 className="font-bold">{titulo}</h3>
          <p className="italic">{referencia}</p>
          <p>{definicion}</p>
        </div>
        {children}
      </div>
    </div>
  );
};

export default SplashCard;
