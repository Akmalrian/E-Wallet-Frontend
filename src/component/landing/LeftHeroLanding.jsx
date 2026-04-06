const LeftHeroLanding = () => {
  return (
    <section className="h-screen w-[576px] h-[389px] ">
      <div className="container">
        <p className="text-5xl my-2 font-montserrat">
          Smart Way to Your Financial Business
        </p>
        <p className="text-[#4F5665] mt-4 mb-6 font-montserrat">
          We bring you a mobile app for banking problems that oftenly wasting
          much of your times.
        </p>
        <button className="border bg-[#2948FF] h-11 px-6 rounded-[5px] hover:bg-white hover:text-[#2948FF] transition text-white">
          Get Started
        </button>
        <p className="my-6 text-[#4F5665] font-montserrat">Available On</p>
        <div className="flex gap-10">
          <img src="/public/image/playStore.png" alt="Icon Playstore" />
          <img src="/public/image/Apple.png" alt="Icon Playstore" />
        </div>
      </div>
    </section>
  );
};
export default LeftHeroLanding;
