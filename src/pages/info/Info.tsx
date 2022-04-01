import { memo } from 'react';
import { FormattedMessage } from 'react-intl';
import download from '../../assets/download.svg';

const Info = () => {
  return (
    <div className="max-w-6xl mx-6 md:mx-14 my-16">
      <p className="text-3xl font-bold capitalize mb-16">
        <FormattedMessage id="info" />
      </p>
      <p className="ext-2xl font-bold capitalize my-4">
        <FormattedMessage id="accommodationAgreement" />
      </p>
      <p>
        <FormattedMessage id="accommodationAgreementSubText" />
      </p>
      <a href="/panaudossutartisSK.docx" download className="inline-flex items-center mt-8 text-teal-800">
        <img src={download} alt="download" width={31} height={31} />
        <FormattedMessage id="downloadAgreement" />
      </a>
    </div>
  );
};

export default memo(Info);
