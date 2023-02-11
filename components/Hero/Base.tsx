import { TypeHero } from "components/types/hero.types";

const Index = ({ title, text }: TypeHero): JSX.Element => {
  return (
    <div className="bg-black h-screen">
      <div className="text-white h-screen px-4 xl:pl-24 xl:pr-56 flex flex-col gap-y-2 justify-center items-left bg-version md:object-cover xl:object-contain bg-no-repeat bg-center">
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Index;
