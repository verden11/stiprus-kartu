import { memo } from 'react';
import { FormattedMessage } from 'react-intl';

export const InfoForUkrainians = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl">
        <FormattedMessage id="informationForUkrainian" />
      </h1>
    </div>
  );
};

export default memo(InfoForUkrainians);
