import toast from "react-hot-toast"; // Pastikan install react-hot-toast
import ButtonLogin from "../button/ButtonLogin";

const showSuccessToast = () => {
  toast.custom((t) => (
    <div
      className={`${
        t.visible ? 'animate-enter' : 'animate-leave'
      } w-149 h-147.5 bg-white rounded-lg mt-15 ml-40 pointer-events-auto flex ring-1 ring-black ring-opacity-5 font-montserrat`}
    >
      <div className="px-4 w-280 h-101">
          <div className="mb-25">
            <p className="font-semibold pt-5 text-secondary border-b border-gray-400">TRANSFER TO GHALUH 1</p>
            <p className="text-3xl mt-20">Enter Your Pin 👋</p>
            <p className="text-secondary">Enter Your Pin For Transaction</p>
            <div className="flex gap-5 justify-center mt-10">
              <input className="w-20 h-20 border-b font-medium border-b-black focus:outline-none text-3xl text-center text-[#0B132A] focus:border-b-blue-500" type="text" maxlength="1" />
              <input className="w-20 h-20 border-b font-medium border-b-black focus:outline-none text-3xl text-center text-[#0B132A] focus:border-b-blue-500" type="text" maxlength="1" />
              <input className="w-20 h-20 border-b font-medium border-b-black focus:outline-none text-3xl text-center text-[#0B132A] focus:border-b-blue-500" type="text" maxlength="1" />
              <input className="w-20 h-20 border-b font-medium border-b-black focus:outline-none text-3xl text-center text-[#0B132A] focus:border-b-blue-500" type="text" maxlength="1" />
              <input className="w-20 h-20 border-b font-medium border-b-black focus:outline-none text-3xl text-center text-[#0B132A] focus:border-b-blue-500" type="text" maxlength="1" />
              <input className="w-20 h-20 border-b font-medium border-b-black focus:outline-none text-3xl text-center text-[#0B132A] focus:border-b-blue-500" type="text" maxlength="1" />
            </div>
          </div>
          <div className="">
            <ButtonLogin type="submit">Next</ButtonLogin>
          </div>
          <p className="text-center text-secondary font-montserrat">
          Forgot Your Pin?
          <div className="text-primary hover:underline">
            {" "}
            Reset
          </div>
        </p>
        </div>
    </div>
  ));
};

export default showSuccessToast;