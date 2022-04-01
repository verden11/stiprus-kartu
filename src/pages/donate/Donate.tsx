import { memo } from 'react';
import { FormattedMessage } from 'react-intl';

const Donate = () => {
  return (
    <div className="max-w-6xl mx-6 md:mx-14 my-16">
      <p className="text-3xl font-bold capitalize mb-16">
        <FormattedMessage id="donate" />
      </p>
      <p>
        <FormattedMessage id="donateSubText" />
      </p>

      <div className="text-base">
        <p className="font-bold">VŠĮ “Stiprūs kartu”</p>
        <p>Company code: 305674792</p>
        <p>Address: P. Vileišio 18A, Vilnius</p>
        <p>Bank account number: LT387044090101401806</p>
        <p>AB SEB bankas</p>
      </div>

      <a href="mailto:mes@stipruskartu.lt" className="text-teal-800">
        mes@stipruskartu.lt
      </a>

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
