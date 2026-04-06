
import CardAboutAplication from "./CardAboutAplication";

const Section2LandingPage = () => (

    <section className="grid grid-cols-[2fr_3fr] w-full p-28 font-montserrat">
        <div className="flex items-center p-4">
            <div>
                <p className="text-[36px] font-medium mb-4">About The Aplication</p>
                <p className="text-[16px] text-[#4F5665]">We have some great features from the application and it’s totally free to use by all users around the world.</p>
            </div>
        </div>
        <div className="flex gap-5 p-4">
            <CardAboutAplication
            icon ="/src/assets/Headphones.png"
            title = "24/7 Support"
            text="We have 24/7 contact support so you can contact us whenever you want and we will respond it." />
            <CardAboutAplication
            icon ="/src/assets/Shield-Done.png"
            title = "Data Privacy"
            text="We make sure your data is safe in our database and we will encrypt any data you submitted to us." />
            <CardAboutAplication
            icon ="/src/assets/Download.png"
            title = "Easy Download"
            text="Zwallet is 100% totally free to use it’s now available on Google Play Store and App Store." />
        </div>
        
    </section>
);
export default Section2LandingPage;

