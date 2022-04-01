import { memo } from 'react';

const Footer = () => {
  return (
    <div className="flex flex-col px-6 md:px-14 py-7 md:py-12 bg-stone-300">
      <p>© 2022 Stiprūs Kartu</p>
      <div className="flex flex-1 flex-row justify-between flex-wrap">
        <div className="flex-col">
          <p>Įmonės kodas: 305674792</p>
          <p>Adresas: P. Vileišio 18A, Vilnius</p>
          <p>Banko sąskaitos Nr.: LT387044090101401806</p>
          <p>AB SEB bankas</p>
          <p className="text-teal-800 hover:underline">
            <a href="mailto:mes@stipruskartu.lt">mes@stipruskartu.lt</a>
          </p>
        </div>
        <div>
          <p>Solution</p>
          <p>Insert Here</p>
        </div>
      </div>
    </div>
  );
};

export default memo(Footer);
