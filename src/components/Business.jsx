import business from "../assets/shakinghands.jpeg";
import noel from "../assets/noel.jpeg";
import BusinessForm from "./BusinessForm";
function Business() {
  return (
    <div className=" ">
      <h1 className="text-center  text-3xl md:text-4xl font-bold">
        Mozisha, Your Growth Partner
      </h1>

      <div>
        <img
          src={business}
          alt=""
          className=" mx-auto rounded-md w-[800px] py-16 shadow-2xl px-4 my-8"
        />
        <p className="py-4 leading-8 px-4 md:px-16">
          Joined other VC-backed startups supported by Mozisha. As your trusted
          growth partner, we specialize in providing top-notch operational,
          sales, marketing and customer support tailored to your unique needs.
          Our commitment is to empower your business with the strategic
          resources necessary for sustained growth.
        </p>
      </div>

      <div className="h-fit flex flex-col max-w-[500px] px-4 md:px-24  mx-auto bg-purple-50 rounded-md gap-8 py-24 shadow-2xl my-16">
        <img src={noel} alt="" className="h-[200px]  w-[200px] rounded-full" />
        <blockquote className="leading-8">
          {" "}
          “ We have been Mozisha’s client since February 2023 and our
          exponential growth this year could not have happened outside the
          direct works of the talents that Mozisha entrusted to us. “
        </blockquote>
        <p className="font-bold text-purple-800">Noel Sinaga</p>
        <p className="font-bold  text-xs text-purple-800">CEO Authentic Kitchens</p>
      </div>

      <div className="max-w-[1000px] mx-auto px-8 h-full pb-48 shadow-2xl mb-44">
        <h3 className="text-purple-800 leading-8 text-center  mt-20">
          Fill out the form below and let Mozisha be the driving force behind
          your success.
        </h3>

        <BusinessForm />
      </div>
    </div>
  );
}

export default Business;
