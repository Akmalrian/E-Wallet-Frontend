import { useAppSelector } from "../../store/hooks";
import CardPaymentMethod from "../Card/CardPaymentMethod";
import InputNominal from "../input/InputNominal";

function TopUpAccountInformation() {

    const { currentUser } = useAppSelector((state) => state.auth);
    const displayPhone = currentUser?.phone || "";
    const displayName = currentUser?.fullName || "User";
    const displayAvatar = currentUser?.avatar || "/public/image/blank-photo.jpg";

  return (
    <section className="mt-6 text-medium font-montserrat">
      <div className="flex mx-4 items-center font-semibold gap-4 mb-8">
        <img src="/image/UploadBlue.svg" alt="icon Top Up" />
        <p>Top Up Account</p>
      </div>
      <div className="mx-4 w-175 h-198 justify-between shadow max-md:w-auto max-md:h-auto max-md:mx-4 max-md:pb-6">
        <div>
          <p className="font-semibold px-10 py-5">Account Infromation</p>
        </div>
        <div>
          <div className="ml-10 mr-10 max-md:ml-4 max-md:mr-4">
            <div className="flex justify-between items-center h-28.75 w-full p-4 bg-[#E8E8E84D] max-md:h-auto max-md:py-4 max-md:rounded-xl">
              <div className="flex items-center">
                <img
                  className="w-20 h-20"
                  src={displayAvatar}
                  alt="Ghaluh Photo"
                />
                <div className="ml-5 grid gap-2">
                  <h6 className="font-bold">{displayName}</h6>
                  <p>{displayPhone}</p>
                  <img src="/image/verified.svg" alt="icon verified" />
                </div>
              </div>
            </div>
            <h6 className="mt-5 font-bold">Amount</h6>
            <p className="mt-1">
              Type the amount you want to transfer to your e-wallet account
            </p>
            <InputNominal
              type="text"
              placeholder="Enter Nominal Transfer"
              id="text"
              icon="/image/u_money-bill.svg"
            />
            <h6 className="mt-4 font-bold">Payment Method</h6>
            <p className="mt-1 mb-4">
              Choose your payment method for top up account
            </p>
            <div className="grid gap-5">
              <CardPaymentMethod
                image="/image/Bank BRI (Bank Rakyat Indonesia).svg"
                title="Bank Rakyat Indonesia"
                name="payment_method"
                id="bri"
              />
              <CardPaymentMethod
                image="/image/Logo DANA.svg"
                title="Dana"
                name="payment_method"
                id="dana"
              />
              <CardPaymentMethod
                image="/image/BCA.svg"
                title="Bank Central Asia "
                name="payment_method"
                id="bca"
              />
              <CardPaymentMethod
                image="/image/Gopay.svg"
                title="Gopay"
                name="payment_method"
                id="gopay"
              />
              <CardPaymentMethod
                image="/image/Ovo.svg"
                title="Ovo"
                name="payment_method"
                id="Ovo"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TopUpAccountInformation;
