import { memo } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

const Donate = () => {
  const { formatMessage } = useIntl();
  return (
    <div className="max-w-6xl mx-6 md:mx-14 my-16">
      <p className="text-3xl font-bold capitalize mb-16">
        <FormattedMessage id="donate" />
      </p>
      <p>
        <FormattedMessage id="donateSubText" />
      </p>

      <div className="text-base">
        <p className="font-bold"><FormattedMessage id="donate.company.name"/></p>
        <p><FormattedMessage id="donate.company.code"/> 305674792</p>
        <p><FormattedMessage id="donate.company.address"/></p>
        <p><FormattedMessage id="donate.company.bankAccount"/> LT387044090101401806</p>
        <p><FormattedMessage id="donate.company.bankName"/></p>
      </div>

      <div className="my-3">
        <a href="mailto:mes@stipruskartu.lt" className="text-teal-800 hover:underline">
          <FormattedMessage id="donate.email"/>
        </a>
      </div>

      <form target="_blank" action="https://www.paypal.com/donate" method="post" className="my-9">
        <input type="hidden" name="hosted_button_id" value="Q9N2KYT5YLBP4" />
        <div>Paypal</div>
        <input
          type="image"
          src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif"
          name="submit"
          title="Paremkite"
          alt="Donate with PayPal button"
        />
      </form>
    </div>
  );
};

export default memo(Donate);
