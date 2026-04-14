
import { Link } from "react-router";
import ButtonLogin from "../button/ButtonLogin";
import InputNominal from "../input/InputNominal";

function ProfilePicture() {
  return (
    <section className="mt-6 text-medium font-montserrat">
      <div className="flex mx-4 items-center font-semibold gap-4 mb-8">
        <img src="/image/2User.svg" alt="icon history" />
        <p>Profile</p>
      </div>
      <div className="mx-4 w-280 h-205 justify-between shadow max-md:w-auto max-md:h-auto max-md:mx-4 max-md:pb-28">
        <div>
          <p className="font-semibold px-10 py-5">Profile Picture</p>
        </div>
        <div>
          <div className="ml-10 mr-10 max-md:ml-4 max-md:mr-4">
            <div className="flex justify-between items-center h-28.75 w-full
              max-md:h-auto max-md:py-4 max-md:flex-col max-md:items-start max-md:gap-4">
              <div className="flex items-center max-md:flex-col max-md:items-center max-md:w-full max-md:gap-4">
                <div className="w-32 h-32 bg-[#E8E8E84D] flex justify-center items-center max-md:overflow-hidden">
                  <img className="w-12.5 h-12.5 bg-[#E8E8E84D]" src="/image/UserNone.svg" alt="Photo none" />
                </div>
                <div className="ml-5 grid gap-2 text-[14px] max-md:ml-0 max-md:w-full max-md:grid-cols-2">
                 <button className="flex border bg-primary h-11 w-40 items-center gap-2 rounded-[5px] hover:bg-blue-800 transition text-white
                  max-md:w-full max-md:justify-center">
                  <img className="w-6 h-6 ml-2" src="/image/Edit Square.svg" alt="icon top up" />Change Profile
                 </button>
                  <button className="flex mr-4 border border-red-600 text-red-600 h-11 w-40 items-center gap-2 rounded-[5px] hover:bg-gray-200 transition
                  max-md:w-full max-md:mr-0 max-md:justify-center">
                    <img className="w-6 h-6 ml-2" src="/image/Delete.svg" alt="icon transfer" /> Delete Profile
                  </button>
                </div>
              </div>
            </div>
            <p className="mt-4 text-secondary">
              The profile picture must be 512 x 512 pixels or less
            </p>
            <h6 className="mt-5 font-bold">Full Name</h6>
            <InputNominal
              type="text"
              placeholder="Enter Nominal Transfer"
              id="text"
              icon="/image/UserNone.svg"
            />
            <h6 className="mt-5 font-bold">Phone</h6>
            <InputNominal
              type="text"
              placeholder="Enter Nominal Transfer"
              id="text"
              icon="/image/Phone.svg"
            />
            <h6 className="mt-5 font-bold">Email</h6>
            <InputNominal
              type="text"
              placeholder="Enter Nominal Transfer"
              id="text"
              icon="/image/mail.png"
            />
            <h6 className="mt-4 font-bold">Password</h6>

            <p className="mt-1 mb-4 text-primary">
              <Link to="password-profile">
              Change Password
              </Link>
            </p>
            <h6 className="mt-4 font-bold">Pin</h6>
            <p className="mt-1 mb-4 text-primary">
               <Link to="pin-profile">
              Change Pin
              </Link>
            </p>
            <a href="transferEnterPin.html">
              <ButtonLogin type="submit">
              Submit
              </ButtonLogin>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfilePicture;
