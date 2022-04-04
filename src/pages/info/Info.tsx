import { memo } from 'react';
import { FormattedMessage } from 'react-intl';
import download from '../../assets/download.svg';

const Info = () => (
  <div className="flex flex-1 flex-col mx-6 md:mx-14 my-16">
    <p className="text-3xl font-bold capitalize mb-16">
      <FormattedMessage id="info" />
    </p>
    <p className="text-2xl font-bold capitalize mb-4">
      <FormattedMessage id="accommodationAgreement" />
    </p>
    <p className="text-lg mb-8">
      <FormattedMessage id="accommodationAgreementSubText" />
    </p>
    <a href="/panaudossutartisSK.docx" download className="inline-flex items-center text-teal-800 text-lg">
      <img src={download} alt="download" width={32} height={32} />
      <FormattedMessage id="downloadAgreement" />
    </a>
  </div>
);

export default memo(Info);
