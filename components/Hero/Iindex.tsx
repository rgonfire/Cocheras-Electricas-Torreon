import { TypeHero } from "components/types/hero.types";

const index = ({ title, text }: TypeHero): JSX.Element => {
  return (
    <div className="bg-black h-screen">
      <div className="text-white xl:pl-24 xl:pr-56 flex flex-col gap-y-2 justify-center items-left bg-version object-contain bg-no-repeat bg-center xl:w-full xl:min-h-screen ">
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default index;
