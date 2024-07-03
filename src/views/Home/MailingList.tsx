import { Button, Input } from "antd";

const MailingList = () => {
  return (
    <div className="my-20">
      <h1 className="text-center font-bold text-2xl text-[#566b30]">Join our mailing list to get exclusive updates</h1>
      <div className="flex items-center flex-wrap lg:flex-nowrap gap-5 lg:w-[80%] lg:mx-auto mt-10">
        <Input placeholder="Enter you email address here" className="py-3"/>
        <Button
          type="primary"
          className="shadow-none p-6 hover:scale-95 mx-auto lg:mx-0 transition-all flex items-center justify-center w-44 font-semibold"
        >
          Subscribe
        </Button>
      </div>
    </div>
  );
};

export default MailingList;
