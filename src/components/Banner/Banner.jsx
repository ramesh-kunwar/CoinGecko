import BannerImage from "../../assets/banner.jpg";
const Banner = () => {
  return (
    <div className="w-full h-[25rem] relative">
      <img src={BannerImage} alt="Banner" className="w-full h-full " />
      <div className="absolute top-10 left-0 right-0 mx-auto w-[20rem]">
        <div className="flex flex-col gap-4">
          <div className="font-semibold text-5xl text-white">
            Crypto Tracker
          </div>
          <div className="font-semibold text-sm text-center text-white">
            Get All Info Regarding Crypto{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
