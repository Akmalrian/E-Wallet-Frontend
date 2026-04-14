const LeftHeroLanding = () => {
  return (
    <section className="w-xl h-97.25 max-md:w-full max-md:h-auto">
  <div className="max-md:text-left">
        <p className="text-5xl my-2 font-montserrat max-md:text-3xl max-md:leading-tight">
          Smart Way to Your Financial Business
        </p>
        <p className="text-secondary mt-4 mb-6 font-montserrat max-md:text-sm">
          We bring you a mobile app for banking problems that oftenly wasting
          much of your times.
        </p>
        <button className="border bg-primary h-11 px-6 rounded-[5px] hover:bg-white hover:text-primary transition text-white">
          Get Started
        </button>
        <p className="my-6 text-secondary font-montserrat max-md:my-4">Available On</p>
        <div className="flex gap-10">
          <img src="/image/playStore.png" alt="Icon Playstore" />
          <img src="/image/apple.png" alt="Icon Apple" />
        </div>
      </div>
    </section>
  );
};
export default LeftHeroLanding;
