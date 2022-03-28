import React from 'react';

export const Footer = () => {
  return (
    <div className="flex flex-1 flex-col mx-6 md:mx-14">
      <p>© 2022 Stiprūs Kartu</p>
      <div className="flex flex-1 flex-row justify-between flex-wrap">
        <div className="flex-col">
          <p>Įmonės kodas: 305674792</p>
          <p>Adresas: P. Vileišio 18A, Vilnius</p>
          <p>Banko sąskaitos Nr.: LT387044090101401806</p>
          <p>AB SEB bankas</p>
          <p>
            <a href="mailto:mes@stipruskartu.lt">mes@stipruskartu.lt</a>
          </p>
        </div>
        <div>
          <p>Sprendimo Partnernis</p>
          <p>Insert Here</p>
        </div>
      </div>
    </div>
  );
};
