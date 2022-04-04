import { memo } from 'react';
import { FormattedMessage } from 'react-intl';
import { Company } from '../constants';

const fullYear = new Date().getFullYear();

const Footer = () => (
  <div className="flex flex-col px-6 md:px-14 py-7 md:py-12 bg-stone-300">
    <p className="text-xl font-normal mb-8">
      © {fullYear} <FormattedMessage id="strongTogether2" />
    </p>
    <div className="flex flex-1 flex-row justify-between flex-wrap">
      <div className="flex-col font-normal text-base leading-5">
        <p>
          <FormattedMessage id="footer.companyCode" />: {Company.code}
        </p>
        <p>
          <FormattedMessage id="footer.address" />: P. Vileišio 18A, Vilnius
        </p>
        <p>
          <FormattedMessage id="footer.bankAccount" />: {Company.account}
        </p>
        <p>AB SEB bankas</p>
        <p className="text-teal-800 hover:underline">
          <a href="mailto:mes@stipruskartu.lt">mes@stipruskartu.lt</a>
        </p>
      </div>
      <div>
        <p>
          <FormattedMessage id="solution" />
        </p>
        <p>Insert Here</p>
      </div>
    </div>
  </div>
);

export default memo(Footer);
