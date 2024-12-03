import Maskgroup from "../assets/Mask group (1).png";
import Rectangle from "../assets/Rectangle 1273.png";
import logo from "../assets/Group 1171276351.png";
import pcPoster from "../assets/Group 1171275619.png";
import adPoster from "../assets/Group 1171276370.png";
import reviewPoster from "../assets/Group 1171276414.png";
import servicePoster from "../assets/Group 1171276473.png";
import clientsPoster from "../assets/Group 1171276217.png";
import clients from "../assets/Mask group.png";
const Homepage = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-20">
      <div className="">
        <img className="h-full w-full" src={Maskgroup} alt="" />
        <div className="absolute top-0">
          <img className=" h-full w-full" src={Rectangle} alt="" />
        </div>

        <div className="flex justify-center items-center">
          <div className="absolute top-[3rem]">
            <img className="" src={logo} alt="" />
          </div>
          <div className="absolute top-[8rem]">
            <p className="bg-[#FFDB5E] py-1 px-5 text-[30px] font-gilroyb leading-[40px] text-[#33256C]">
              LOCAL MARKETER’S NEW SECRET WEAPON
            </p>
          </div>
          <div className="absolute top-[12rem] w-[70%]">
            <p className=" text-white text-[73px] font-gilroyh leading-[82px] text-center">
              AI Finds Local Biz Owners <br /> Who Need Help and{" "}
              <span className="italic underline underline-offset-4 text-orange-600">
                Sells Your <br /> Services
              </span>{" "}
              For You!
            </p>
          </div>

          <div className="absolute top-[30rem]">
            <p className="font-gilroym text-white text-[25px] leading-[29px]">
              Save hours of work, thousands of dollars and{" "}
              <span className="underline underline-offset-4 text-[#FFDB5E]">
                win new clients every single day!
              </span>
            </p>
          </div>
          <div className="absolute top-[34rem]">
            <img src={pcPoster} alt="" />
          </div>
        </div>
      </div>
      <div className="">
        <img src={adPoster} alt="" />
      </div>
      <div>
        <img src={reviewPoster} alt="" />
      </div>
      <div>
        <img src={servicePoster} alt="" />
      </div>
      <div className="relative bg-gray-800 w-[80rem]">
        <div className="absolute left-[10%]">
          <img className="h-full w-full" src={clientsPoster} alt="" />
        </div>
        <div className="absolute top-[13rem] -z-10 right-0">
          <img className="h-[343px] w-[1440px] " src={clients} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
