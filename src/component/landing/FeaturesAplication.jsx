import BackgroundVector from "../section/BackgroundVector";
import CardFeatures from "../Card/CardFeatures";

const FeaturesAplication = () => (
  <section className="font-montserrat mb-80">
    <BackgroundVector />
    <div class="flex justify-center gap-4 p-10 ">
      <div class="relative right-20">
        <img src="/public/image/Mobile-Dashboard.png" alt="mobile Dashboard" />
      </div>
      <div class="relative left-30 top-60 h-[460px] w-[580px]">
        <div class="text-white">
          <h6 className="text-4xl mb-6">All The Great Zwallet Features.</h6>
          <p className="text-[16px] mb-6">
            We have some great features from the application and it’s totally
            free to use by all users around the world.
          </p>
        </div>
        <div class="grid gap-4">
            <CardFeatures
            icon ="/public/image/fee.png"
            title = "Small Fee"
            text="We only charge 5% of every success transaction done in Zwallet
                app." />
            <CardFeatures
            icon ="/public/image/secured.png"
            title = "Data Secured"
            text="All your data is secured properly in our system and it’s
                encrypted." />
            <CardFeatures
            icon ="/public/image/friendly.png"
            title = "User Friendly"
            text="Zwallet come up with modern and sleek design and not
                complicated.." />
        <button className="border mt-4 bg-white h-12.5 w-41.25 px-6 rounded-md text-[#2948FF]">
          Get Started
        </button>
        </div>
        
      </div>
    </div>
  </section>
);
export default FeaturesAplication;

