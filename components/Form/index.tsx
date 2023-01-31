import { useState } from "react";
import Input from "./Input";
import Button from "components/Button/Index";
import ArrowRight from "assets/Images/Iconos/svgs/arrowRight_White.svg";
import ArrowLeft from "assets/Images/Iconos/svgs/arrowLeft_White.svg";

const index = (): JSX.Element => {
  const [formStep, setFormStep] = useState(0);

  function nextFormStep() {
    if (formStep < 6) {
      setFormStep((prevState) => prevState + 1);
    }
  }

  function previousFormStep() {
    if (formStep > 0) {
      setFormStep((prevState) => prevState - 1);
    }
  }

  return (
    <form className="flex flex-col gap-y-6">
      {formStep === 0 && <Input label="Nombre" name="name" required={true} />}
      {formStep === 1 && (
        <Input label="Direccion" name="address" required={true} type="text" />
      )}

      {formStep < 5 && (
        <div className="flex flex-row gap-x-2">
          <Button
            disabled={false}
            size="default"
            type="button"
            color="black"
            text="Anterior"
            iconLeft={ArrowLeft}
            onClick={previousFormStep}
          />
          <Button
            disabled={false}
            size="default"
            type="button"
            color="black"
            text="Siguiente"
            iconRight={ArrowRight}
            onClick={nextFormStep}
          />
        </div>
      )}
    </form>
  );
};

export default index;
