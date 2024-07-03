import { Card } from "antd";
import business from "../../assets/icons/business.svg";

const SectionThree = () => {
  return (
    <div className="bg-[#F5F5F5] p-10 py-20 rounded-3xl mt-20">
      <h1 className="font-bold text-[1.5rem] sm:text-[2.5rem] text-center">
        Flexible Payment Option For All{" "}
        <span className="text-[#566b30] border-b-8 border-[#566b30]">
          Businesses
        </span>{" "}
      </h1>
      <p className="text-center font-thin w-[60%] mx-auto mt-3">
        Whether you're an individual or a business, <strong>Echezona</strong> is
        designed to provide you and your customers with optimal convinience.
      </p>
      <div className="grid lg:grid-cols-2 gap-20 mt-10">
        <Card className="rounded-3xl shadow-sm py-5">
          <img src={business} alt="" className="mx-auto" />
          <h1 className="font-bold text-[1.5rem] my-3 text-center">
            Individual
          </h1>
          <p className="text-center font-thin w-[90%] mx-auto">
            Keep customers happy with fast, easy and convenient payment
            approach. Echezona allows you receive money from anyone and anywhere
            in the world.
          </p>
        </Card>
        <Card className="rounded-3xl shadow-sm py-5">
          <img src={business} alt="" className="mx-auto" />
          <h1 className="font-bold text-[1.5rem] my-3 text-center">Business</h1>
          <p className="text-center font-thin w-[90%] mx-auto">
            Echezona serves as a growth tool for your business. The platform
            allows you to focus on your business while we cater to how you
            receive payments.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default SectionThree;
