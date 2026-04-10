const LeftHeroLanding = () => {
  return (
    <section className="w-xl h-97.25 ">
      <div className="container">
        <p className="text-5xl my-2 font-montserrat">
          Smart Way to Your Financial Business
        </p>
        <p className="text-secondary mt-4 mb-6 font-montserrat">
          We bring you a mobile app for banking problems that oftenly wasting
          much of your times.
        </p>
        <button className="border bg-primary h-11 px-6 rounded-[5px] hover:bg-white hover:text-primary transition text-white">
          Get Started
        </button>
        <p className="my-6 text-secondary font-montserrat">Available On</p>
        <div className="flex gap-10">
          <img src="/public/image/playStore.png" alt="Icon Playstore" />
          <img src="/public/image/Apple.png" alt="Icon Playstore" />
        </div>
      </div>
    </section>
  );
};
export default LeftHeroLanding;
