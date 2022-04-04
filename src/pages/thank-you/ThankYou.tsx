import { memo, useContext } from 'react';
import { ProvidersContext } from '../../Providers';

export const ThankYou = () => {
  const { language } = useContext(ProvidersContext);
  const time = new Intl.DateTimeFormat(language, { year: 'numeric', month: 'long', day: 'numeric' }).format(new Date());
  return (
    <div className="flex flex-1 justify-center">
      <div className="max-w-[60%] px-6 md:px-14 pt-3">
        <h1 className="font-bold text-3xl">Ačiū, #StiprūsKartu savanoriai!</h1>
        <div className="flex flex-1 justify-between my-8">
          <p>{time}</p>
          <iframe
            title="fb-share"
            src="https://www.facebook.com/plugins/share_button.php?href=https://stipruskartu.lt/lt/aciu-stipruskartu-savanoriai/&amp;layout=button&amp;size=small&amp;appId=213491853253994&amp;width=67&amp;height=20"
            width="67"
            height="20"
            scrolling="no"
            allowTransparency
            allow="encrypted-media"
          ></iframe>
        </div>
        <p className="my-6">Nuostabūs „Stiprūs kartu“ savanoriai,</p>
        <p className="my-6">
          Vieną dieną, kai visas pasaulis sustojo, didelė dalis Lietuvos žmonių atsidūrė aklavietėje, o kita – dar
          didesnė dalis suprato, kad dabar yra metas budėti ir padėti. Ir tą dieną prasidėjo „Stiprūs kartu“ istorija,
          kurios herojai esate JŪS.
        </p>
        <p className="my-6">
          „Broliai ir sesės šauliai, mūsų bendražygiai Lietuvos skautai, visi gerieji žmonės, tapę „Stiprūs kartu“
          savanoriais, AČIŪ! Daugiau nei pusantro mėnesio prabėgo lyg akimirka. Nuėjome kelią, kurį prisiminsime visada.
          „Stiprūs kartu“ savanoriai ne tik padėjo tūkstančiams, bet, akivaizdu, savo darbais ne vieną išgelbėjo nuo
          ligos ar mirties. Trisdešimt laisvės metų užaugino tūkstančius žmonių, kurie neklausia – ką man duosit? o
          klausia – kuo galiu būti naudingas? Laisvės medis žydi. Su pavasariu!“ – Edmundas Jakilaitis.
        </p>
        <p className="my-6">
          Už kiekvieno iš Jūsų iniciatyvą ir parodytą norą ištiesti pagalbos ranką kitiems, „Stiprūs kartu“ iniciatoriai
          yra be galo dėkingi! Jūsų užsiregistravusių skaičius visoje Lietuvoje yra toks įspūdingas, kad mes nespėjome
          kreiptis į visus savanorius. Ir tai reiškia, kad norinčių padėti piliečių yra daugiau nei tų, kuriems reikia
          pagalbos, o tai labai džiugina.
        </p>
        <p className="my-6">
          Tikimės, kad šiltas žmogiškas santykis tarp Jūsų ir tų žmonių, kuriems padėjote, neišnyks pasibaigus
          karantinui. Ir pasibaigus „Stiprūs kartu“ iniciatyvai Jūs toliau palaikysite ryšį su pažįstamais ar šalia
          gyvenančiais senjorais, nes Jūsų pagalba jiems yra be galo prasminga. Taip pat norintiems ir toliau tęsti
          gerus darbus, siūlome prisidėti prie „Maisto banko“, „Gelbėkit vaikus“, Maltiečių ar kitų organizacijų.
        </p>
        <p className="my-6">
          Toks projektas kaip „Stiprūs kartu“ negali tiesiog imti ir pasibaigti. Turėdami tokias gausias Jūsų pajėgas,
          esame tikri, jog susitiksime ir susivienysime dar ne vieną kartą! Galbūt organizuodami dar laukiančias
          socialines akcijas ar įvairias pilietines iniciatyvas. Todėl su didžiausia padėka, pagarba ir nuoširdžiausiais
          linkėjimais sakome stiprų AČIŪ kiekvienam iš Jūsų.
        </p>
        <iframe
          title="fb-share"
          src="https://www.facebook.com/plugins/share_button.php?href=https://stipruskartu.lt/lt/aciu-stipruskartu-savanoriai/&amp;layout=button&amp;size=small&amp;appId=213491853253994&amp;width=67&amp;height=20"
          width="67"
          height="20"
          scrolling="no"
          allowTransparency
          allow="encrypted-media"
        ></iframe>
      </div>
    </div>
  );
};

export default memo(ThankYou);
