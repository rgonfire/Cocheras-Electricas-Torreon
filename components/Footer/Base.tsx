/**
 * @description Footer global del sitio web.
 */

const Index = (): JSX.Element => {
  return (
    <footer className="py-10 bg-black">
      <div className="px-10 gap-x-10 text-white md:gap-y-2 flex flex-col flex-wrap md:flex-row justify-left items-left">
        <div>
          <h3>Horario:</h3>
          <p className="underline">Lunes a sabado de 9:00 - 19:00</p>
        </div>

        <div>
          <h3>Teléfono:</h3>
          <p className="underline">8711413457</p>
        </div>

        <div>
          <h3>Dirección:</h3>
          <p className="underline">Calle Rio sena 1357, Magdalenas</p>
        </div>

        <div>
          <h4>Cocheras Electricas Torreon</h4>
        </div>
      </div>
    </footer>
  );
};

export default Index;
