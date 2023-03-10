/**
 *
 * @description Section of simple text.
 */

import { TypeSimpleSection } from "../types/simpleSection.types";

const getBackgroundColor = (color) => {
  switch (color) {
    case "black":
      return "bg-black text-white";
    case "white":
      return "bg-white text-black";
    case "green":
      return "bg-green text-white";
  }
};

const SimpleSection = ({
  subtitle,
  title,
  color,
}: TypeSimpleSection): JSX.Element => {
  return (
    <div
      className={`${getBackgroundColor(
        color
      )} flex flex-col gap-y-2 px-6 md:px-8 py-24 xl:px-40 xl:py-15 xl:h-screen`}
    >
      <p className="underline">{subtitle}</p>
      <h2>{title}</h2>
    </div>
  );
};

export default SimpleSection;
