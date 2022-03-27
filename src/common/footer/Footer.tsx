import React from 'react';

export const Footer = () => {
  return (
    <div className="flex flex-1 flex-col mx-14">
      <p>© 2022 Stiprūs Kartu</p>
      <div className="flex flex-1 flex-row justify-between flex-wrap">
        <p>
          Įmonės kodas: 305674792
          <br />
          Adresas: P. Vileišio 18A, Vilnius
          <br />
          Banko sąskaitos Nr.: LT387044090101401806
          <br />
          AB SEB bankas
          <br />
          <a href="mailto:mes@stipruskartu.lt">mes@stipruskartu.lt</a>
        </p>
        <div>
          <p>Sprendimo Partnernis</p>
          <p>Insert Here</p>
        </div>
      </div>
    </div>
  );
};
