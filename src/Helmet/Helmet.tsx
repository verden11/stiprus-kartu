import { memo } from 'react';
import { Helmet as ReactHelmet, HelmetProvider } from 'react-helmet-async';
import { useIntl } from 'react-intl';

export const Helmet = () => {
  const { formatMessage } = useIntl();
  return (
    <HelmetProvider>
      <ReactHelmet>
        <title>{formatMessage({ id: 'title' })}</title>
      </ReactHelmet>
    </HelmetProvider>
  );
};

export default memo(Helmet);
