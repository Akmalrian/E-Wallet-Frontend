import ButtonLogin from "../component/button/ButtonLogin";
import HeaderDashboard from "../component/header/HeaderDashboard";
import NavigationDashboard from "../component/header/NavigationDashboard";

const ChangePinProfile = () => (
  <main>
    <section className="grid md:grid-cols-[1fr_3fr_1.5fr] gap-15 font-montserrat">
      <nav>
        <NavigationDashboard />
      </nav>

      <section className="mt-6 text-medium font-montserrat">
        <div className="flex mx-4 items-center font-semibold gap-4 mb-8">
          <img src="/image/2User.svg" alt="icon history" />
          <p>Profile</p>
        </div>
        <div className="mx-4 md:w-280 md:h-101 justify-between shadow">
          <div className="text-center mb-15 md:mb-25">
            <p className="font-semibold px-10 py-5">Change Pin 👋</p>
            <p className="text-secondary">Please save your pin because this so important.</p>
            <div className="flex gap-5 justify-center mt-10">
              <input className="w-10 h-10 md:w-20 md:h-20 border-b font-medium border-b-black focus:outline-none text-3xl text-center text-[#0B132A] focus:border-b-blue-500" type="text" maxlength="1" />
              <input className="w-10 h-10 md:w-20 md:h-20 border-b font-medium border-b-black focus:outline-none text-3xl text-center text-[#0B132A] focus:border-b-blue-500" type="text" maxlength="1" />
              <input className="w-10 h-10 md:w-20 md:h-20 border-b font-medium border-b-black focus:outline-none text-3xl text-center text-[#0B132A] focus:border-b-blue-500" type="text" maxlength="1" />
              <input className="w-10 h-10 md:w-20 md:h-20 border-b font-medium border-b-black focus:outline-none text-3xl text-center text-[#0B132A] focus:border-b-blue-500" type="text" maxlength="1" />
              <input className="w-10 h-10 md:w-20 md:h-20 border-b font-medium border-b-black focus:outline-none text-3xl text-center text-[#0B132A] focus:border-b-blue-500" type="text" maxlength="1" />
              <input className="w-10 h-10 md:w-20 md:h-20 border-b font-medium border-b-black focus:outline-none text-3xl text-center text-[#0B132A] focus:border-b-blue-500" type="text" maxlength="1" />
            </div>
          </div>
          <div className="mx-10 max-md:py-10">
            <ButtonLogin type="submit">Submit</ButtonLogin>
          </div>
        </div>
      </section>
    </section>
  </main>
);
export default ChangePinProfile;