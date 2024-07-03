import logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="lg:h-[28rem] bg-[#566b30] relative p-10">
      <div className="grid lg:grid-cols-3 mb-10">
        <img src={logo} className="w-36" alt="" />
        <section className="mt-10">
          <h2 className="text-white font-semibold text-2xl mb-10">
            Contact Inforamtion
          </h2>
          <p className="text-white">
            3a, Olanrewaju Ninalowo Street, Lekki Phase 1, Lagos.
          </p>
          <p className="text-white my-3">info@echezona.com</p>
          <p className="text-white">+234-9162107000, +234-9162407000</p>
        </section>
        <section className="mt-10">
          <h2 className="text-white font-semibold text-2xl mb-10">
            Our Product
          </h2>
          <p className="text-white">Product One</p>
          <p className="text-white my-3">Product One</p>
          <p className="text-white">Product One</p>
          <p className="text-white my-3">Product One</p>
          <p className="text-white">Product One</p>
        </section>
      </div>
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white border-t w-full text-center pt-3">
        © Copyright Echezona {new Date().getFullYear()} | All right Reserved.
      </div>
    </footer>
  );
};

export default Footer;
