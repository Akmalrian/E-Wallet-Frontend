import { useEffect } from "react";
import ButtonLogin from "../component/button/ButtonLogin";
import NavigationDashboard from "../component/header/NavigationDashboard";
import InputNominal from "../component/input/InputNominal";

function ChangePasswordProfile(){
  useEffect(() => {
        window.scrollTo(0, 0);
      });
  return(
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
        <div className="mx-4 md:w-280 md:h-101 justify-between shadow p-5">
          <div className="mb-25">
            <p className="font-bold">Change Password</p>
            <h6 className="mt-3 font-semibold">Existing Password</h6>
            <InputNominal
              type="text"
              placeholder="Enter Your Existing Password"
              id="text"
              icon="/image/Password.svg"
            />
            <h6 className="mt-3 font-semibold">New Password</h6>
            <InputNominal
              type="text"
              placeholder="Enter Your New Password"
              id="text"
              icon="/image/Password.svg"
            />
            <h6 className="mt-3 font-semibold">Confirm New Password</h6>
            <InputNominal
              type="text"
              placeholder="Re-Type Your New Password"
              id="text"
              icon="/image/Password.svg"
            />
            <div className="mt-5">
            <ButtonLogin type="submit">Submit</ButtonLogin>
          </div>
          </div>
        </div>
      </section>
    </section>
  </main>
);}
export default ChangePasswordProfile;
