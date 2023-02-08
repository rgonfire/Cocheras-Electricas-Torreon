import Image from "next/image";
import { TypeButton } from "components/types/button.types";

const getBackgroundColor = (color) => {
  switch (color) {
    case "black":
      return "bg-black text-white";
    case "white":
      return "bg-white text-black";
    case "green":
      return "bg-green text-white";
    default:
      return "bg-black text-white";
  }
};

const getSize = (size) => {
  switch (size) {
    case "normal":
      return "w-33 h-7 md:w-50 md:h-9";
    case "small":
      return "w-12 h-3 md:w-16 md:h-4";
    default:
      return "w-33 h-7 md:w-50 md:h-9";
  }
};

const Index = ({
  text,
  iconLeft,
  iconRight,
  alt,
  type = "button",
  disabled = false,
  onClick,
  color,
  size,
}: TypeButton): JSX.Element => {
  return (
    <button
      onClick={onClick}
      className={`${getBackgroundColor(color)} ${getSize(
        size
      )} font-bold rounded-full flex flex-row items-center justify-center gap-x-2`}
    >
      {iconLeft && <Image className="w-3" src={iconLeft} alt={alt} />}
      <span className="text-2 capitalize">{text}</span>
      {iconRight && <Image className="w-3" src={iconRight} alt={alt} />}
    </button>
  );
};

export default Index;
