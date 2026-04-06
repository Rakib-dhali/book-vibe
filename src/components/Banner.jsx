import BannerImg from "/assets/banner.png"
const Banner = () => {
  return (
    <div className="flex items-center gap-20 bg-naviblue/5 rounded-3xl mt-15 px-30 py-20">
      <div className="space-y-15">
        <h1 className="font-bold text-[56px] text-naviblue leading-21 font-playfair">
          Books to freshen up your bookshelf
        </h1>
        <button className="cursor-pointer text-white font-bold text-xl bg-lightgreen rounded-lg px-7.5 py-5">
          View The List
        </button>
      </div>
      <img src={BannerImg} alt="bannerImage" />
    </div>
  );
};

export default Banner;
