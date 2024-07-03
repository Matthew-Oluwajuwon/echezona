import HomeImg from "../../assets/images/home-img-2.png";

const SectionTwo = () => {
  return (
    <div className="lg:grid lg:grid-cols-2 gap-10 flex flex-col-reverse mt-28">
      <section className="mx-auto">
        <h1 className="font-bold text-[1.5rem] sm:text-[2.5rem] text-center lg:text-left lg:text-[3rem]">
          Feature-Rich Dashboard For All Your{" "}
          <span className="text-[#566b30] border-b-8 border-[#566b30]">Needs</span>{" "}
        </h1>
        <p className="font-thin leading-loose text-justify mt-5">
          Built on secure APIs, Echezona provides you with a series of features to
          enable you manage your business with ease. From product link
          generation to effective user management abilities, you can be sure of
          an easy-to-use platform.
        </p>
        <p className="font-thin leading-loose text-justify">
          You also have access to real time data on your products' performance
          and transactions information.
        </p>
      </section>
      <section className="xl:w-[70%] mx-auto lg:mx-0 mb-20 lg:mb-0 lg:ml-auto">
        <img src={HomeImg} alt="" />
      </section>
    </div>
  );
};

export default SectionTwo;
