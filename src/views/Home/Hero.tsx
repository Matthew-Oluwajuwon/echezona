import { Button } from "antd";
import heroImg from "../../assets/images/hero-img.png";

const Hero = () => {
  return (
    <div className="lg:grid lg:grid-cols-2 gap-10 flex flex-col-reverse mt-20">
      <section className="mx-auto">
        <h1 className="font-extrabold text-[1.5rem] font-[mulish-extrabold] sm:text-[2.5rem] text-center lg:text-left lg:text-[3rem]">
          The easiest way to make and accept payments from customers{" "}
          <span className="text-[#566b30]">Online</span>{" "}
        </h1>
        <div className="border-4 border-[#566b30] lg:w-[85%] my-3" />
        <p className="font-thin lg:w-[85%] leading-loose text-justify">
          No Website? Well, No problem. With Echezona Payment Links, you can
          receive payments online through your dedicated Payment Link feature
          without any integration. For our e-commerce and corporate clients,
          Echezona offers simple API's that your business can leverage without any
          hassles.
        </p>
      <Button
        type="primary"
        className="shadow-none p-6 hover:scale-95 mx-auto lg:mx-0 transition-all flex items-center justify-center w-44 mt-7 font-semibold"
        onClick={() =>
          (window.location.href = "https://app.echezona.com/register")
        }
      >
        Get Started
      </Button>
      </section>
      <section className="relative xl:w-[70%] mx-auto lg:mx-0 mb-20 lg:mb-0 lg:ml-auto">
        <div className="w-44 h-44 rounded-3xl bg-[#FF6D0080] absolute -top-5 -left-5 -z-10 spin" />
        <img src={heroImg} alt="" />
        <div className="w-44 h-44 rounded-3xl bg-[#2B872B80] absolute bottom-5 -right-5 -z-10 spin-reverse" />
      </section>
    </div>
  );
};

export default Hero;
