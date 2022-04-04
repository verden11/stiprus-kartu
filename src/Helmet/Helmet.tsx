import { memo } from 'react';
import { Helmet as ReactHelmet } from 'react-helmet';
import { useIntl } from 'react-intl';

export const Helmet = () => {
  const { formatMessage } = useIntl();
  return (
    <ReactHelmet>
      <title>{formatMessage({ id: 'title' })}</title>
    </ReactHelmet>
  );
};

export default memo(Helmet);
