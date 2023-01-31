const index = (): JSX.Element => {
  return (
    <footer className="py-5 bg-black border border-white">
      <div className=" h-30 gap-x-10 text-white flex flex-row justify-center items-center">
        <div className="px-10 w-2/5">
          <h4>Cocheras Electricas Torreon</h4>
        </div>

        <div className="px-10 w-3/5">
          <h3>Horario:</h3>
          <p className="underline">Lunes a sabado de 9:00 - 19:00</p>
        </div>
      </div>

      <div className="bg-black h-30 gap-x-10 text-white flex flex-row justify-center items-center">
        <div className="px-10 w-2/5">
          <h3>Teléfono:</h3>
          <p className="underline">8711413457</p>
        </div>

        <div className="px-10 w-3/5">
          <h3>Direccion:</h3>
          <p className="underline">Calle Rio sena 1357, Magdalenas</p>
        </div>
      </div>
    </footer>
  );
};

export default index;
