import { Button, Card } from "antd";
import { MailOutlined, PhoneOutlined, SoundOutlined } from "@ant-design/icons";

const ContactUs = () => {
  return (
    <div className="px-5 lg:px-20 py-20">
      <h1 className="font-bold text-[1.5rem] sm:text-[2.5rem] text-center lg:text-[3rem] mb-5">
        Contact Us
      </h1>
      <p className="font-thin leading-loose text-center">
        Get in touch! We look forward to hearing from you.
      </p>

      <div className="mt-20">
        <h1 className="font-bold text-[1.5rem] sm:text-[2.5rem] text-center lg:text-left lg:text-[3rem] mb-5">
          Still need{" "}
          <span className="text-[#566b30] border-b-8 border-[#566b30]">
            answers?
          </span>{" "}
        </h1>
        <p className="font-thin leading-loose text-center">
          We’re happy to help!
        </p>
      </div>
      <div className="grid lg:grid-cols-3 gap-20 mt-10">
        <Card className="rounded-3xl shadow-md py-5">
          <div className="flex justify-center">
            <MailOutlined className="text-center text-3xl" />
          </div>
          <h1 className="font-bold text-[1.5rem] my-3 text-center">
            General Support
          </h1>
          <p className="text-center font-thin w-[90%] mx-auto">
            Do you have general enquiries or need support? Please send us a
            quick email.
          </p>
        </Card>
        <Card className="rounded-3xl shadow-md py-5">
          <div className="flex justify-center">
            <PhoneOutlined className="text-center text-3xl" />
          </div>
          <h1 className="font-bold text-[1.5rem] my-3 text-center">
            Contact Sales
          </h1>
          <p className="text-center font-thin w-[90%] mx-auto">
            We look forward to working with you to build the next big thing.
          </p>
        </Card>
        <Card className="rounded-3xl shadow-md py-5">
          <div className="flex justify-center">
            <SoundOutlined className="text-center text-3xl" />
          </div>
          <h1 className="font-bold text-[1.5rem] my-3 text-center">
            Report Fraud
          </h1>
          <p className="text-center font-thin w-[90%] mx-auto">
            Contact our fraud hotline at reportfraud@echezona.ng or
            +234-9162107000, +234-9162407000
          </p>
        </Card>
      </div>
      <div className="mt-20 flex items-center justify-between">
        <h1 className="font-bold text-[1.5rem] sm:text-[2.5rem] w-[75%] text-left lg:text-left lg:text-[3rem] mb-5">
          Start accepting payments{" "}
          <span className="text-[#566b30] border-b-8 border-[#566b30]">
            in just 30 minutes
          </span>{" "}
        </h1>
        <Button
          type="primary"
          className="shadow-none p-6 hover:scale-95 mx-auto lg:mx-0 transition-all flex items-center justify-center w-44 mt-7 font-semibold"
          onClick={() =>
            (window.location.href = "https://app.echezona.com/register")
          }
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default ContactUs;
