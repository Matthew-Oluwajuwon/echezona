import PayWithEase from "../../assets/images/pay-with-ease.png";

const SectionOne = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-10 mt-36">
      <section className="mx-auto mb-20 lg:mb-0">
        <img src={PayWithEase} alt="" />
      </section>
      <section className="mx-auto lg:mx-0">
        <h1 className="font-bold text-[1.5rem] sm:text-[2.5rem] text-center lg:text-left lg:text-[3rem] mb-5">
          Accelerate Business Growth Through Unique Ways of Accepting{" "}
          <span className="text-[#566b30] border-b-8 border-[#566b30]">Payment</span>{" "}
        </h1>
        {/* <div className="border-4 border-[#566b30] lg:w-[85%] my-3" /> */}
        <p className="font-thin leading-loose text-justify">
          Echezona provides businesses with the tools they need to run a borderless
          business. As a merchant, you can reach customers via different social
          media platforms and collect payment with ease. You can accept payments
          on the web or mobile channels from your customers who opt for payments
          using card, account transfers (internet banking) or USSD.
        </p>
        <ul className="grid grid-cols-2 mt-3">
            <li className="list mb-3 font-semibold">Bank Payment</li>
            <li className="list font-semibold">Card Payment</li>
            <li className="list mb-3 font-semibold">Mobile Payment</li>
            <li className="list font-semibold">USSD Payment</li>
        </ul>
      </section>
    </div>
  );
};

export default SectionOne;
