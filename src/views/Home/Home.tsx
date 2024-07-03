import Hero from "./Hero";
import MailingList from "./MailingList";
import SectionOne from "./SectionOne";
import SectionThree from "./SectionThree";
import SectionTwo from "./SectionTwo";

const Home = () => {
  document.title =
    "Echezona | The easiest way to make and accept payments from customers Online";

  return (
    <div className="px-5 lg:px-20 py-5">
      <Hero />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <MailingList />
    </div>
  );
};

export default Home;
