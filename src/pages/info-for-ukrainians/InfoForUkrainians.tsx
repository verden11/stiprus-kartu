import { memo, useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import { ProvidersContext } from '../../Providers';

export const InfoForUkrainians = () => {
  const { language } = useContext(ProvidersContext);
  const time = new Intl.DateTimeFormat(language, { year: 'numeric', month: 'long', day: 'numeric' }).format(new Date());
  return (
    <div className="flex flex-1 justify-center">
      <div className="max-w-[60%] px-6 md:px-14 pt-3">
        <h1 className="font-bold text-3xl">
          <FormattedMessage id="informationForUkrainian" />
        </h1>
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

        <div>
          <p className="my-6">
            <strong className="uppercase underline">
              <FormattedMessage id="info.registration" />
            </strong>
            . <FormattedMessage id="info.uponArrival" />.
          </p>
          <p className="my-6">
            <strong className="uppercase">
              <FormattedMessage id="info.condition" />
            </strong>
            , <FormattedMessage id="info.afterRegistration" />:
          </p>
          <ul className="list-disc list-inside">
            <li>
              <FormattedMessage id="info.permit" />;
            </li>
            <li>
              <FormattedMessage id="info.visa" />
            </li>
          </ul>
          <p className="my-6">
            <strong className="uppercase">
              <FormattedMessage id="info.visaRegime" />
            </strong>
            . <FormattedMessage id="info.biometric" />.
          </p>
          <p className="my-6">
            <strong className="uppercase">
              <FormattedMessage id="accommodation" />
            </strong>
            . <FormattedMessage id="info.noResidence" />.
          </p>
          <p className="my-6">
            <strong className="uppercase underline">
              <FormattedMessage id="info.contacts" />:
            </strong>
          </p>
          <p className="my-6">
            <strong>Migration Department</strong>: tel. +370 5 271 7112, e-mail{' '}
            <a href="mailto:info@migracija.gov.lt">info@migracija.gov.lt</a>, information:{' '}
            <a href="http://www.migracija.lrv.lt/">www.migracija.lrv.lt</a>
          </p>
          <p className="my-6">
            <strong>Lithuanian Red Cross</strong> (humanitarian aid, information, restoration of family ties):
            Juozapavičiaus st. 10A, Vilnius, tel. +370 5 212 7322, e-mail{' '}
            <a href="mailto:info@redcross.lt">info@redcross.lt</a>,{' '}
            <a href="http://www.redcross.lt/">www.redcross.lt</a>
          </p>
          <p className="my-6">
            <strong>Caritas of the Vilnius Archdiocese </strong>(humanitarian aid): Kalvarijų str. 39, Vilnius, tel.
            +370 673 24 225, e-mail <a href="mailto:kulturunamai@vilnius.caritas.lt">kulturunamai@vilnius.caritas.lt</a>
          </p>
          <p className="my-6">
            <strong>Order of Malta</strong> (Humanitarian Aid): Gedimino Ave. 56B, Vilnius, tel. +370 5 249 73 04,{' '}
            <a href="http://www.maltieciai.lt/">www.maltieciai.lt</a>,{' '}
            <a href="https://www.facebook.com/maltieciai">https://www.facebook.com/maltieciai</a>
          </p>
          <p className="my-6">
            <strong>Food Bank</strong> (food support): Vytenio st. 54, Vilnius, tel. +370 686 44244, e-mail{' '}
            <a href="mailto:info@maistobankas.lt">info@maistobankas.lt</a>,{' '}
            <a href="https://facebook.com/maistobankas">facebook.com/maistobankas</a>
          </p>
          <p className="my-6">
            <strong>Save the children</strong> (help for children and pregnant women): Vilniaus st. 39, Vilnius, tel.
            +370 5 261 0815, e-mail <a href="mailto:info@savethechildren.org">info@savethechildren.org</a>
          </p>
          <p className="my-6">
            <strong>Accommodation for host families</strong>: tel. 1827,{' '}
            <a href="http://www.stipruskartu.lt/">www.stipruskartu.lt</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default memo(InfoForUkrainians);
