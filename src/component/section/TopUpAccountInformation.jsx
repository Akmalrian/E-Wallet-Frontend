import { useAppSelector } from "../../store/hooks";
import CardPaymentMethod from "../Card/CardPaymentMethod";

function TopUpAccountInformation({ amount, setAmount, selectedMethod, setSelectedMethod }) {
  const { currentUser } = useAppSelector((state) => state.auth);

  const displayPhone = currentUser?.phone || "";
  const displayName = currentUser?.fullName || "User";
  const displayAvatar = currentUser?.avatar || "/image/blank-photo.jpg";

  return (
    <section className="mt-6 text-medium font-montserrat">
      <div className="flex mx-4 items-center font-semibold gap-4 mb-8">
        <img src="/image/UploadBlue.svg" alt="icon Top Up" />
        <p>Top Up Account</p>
      </div>

      <div className="mx-4 w-175 h-198 justify-between shadow
        max-md:w-auto max-md:h-auto max-md:mx-4 max-md:pb-6">
        <div>
          <p className="font-semibold px-10 py-5">Account Information</p>
        </div>
        <div>
          <div className="ml-10 mr-10 max-md:ml-4 max-md:mr-4">

            <div className="flex justify-between items-center h-28.75 w-full p-4
              bg-[#E8E8E84D] max-md:h-auto max-md:py-4 max-md:rounded-xl">
              <div className="flex items-center">
                <img className="w-20 h-20 rounded-full object-cover"
                  src={displayAvatar} alt="Profile" />
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
            <div className="w-full mt-2 mb-4">
              <div className="relative flex items-center">
                <img src="/image/u_money-bill.svg" alt=""
                  className="absolute left-4 w-5 h-5 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Enter Nominal Top Up"
                  value={amount === 0 ? "" : amount}
                  onChange={(e) => {
                    const val = parseInt(e.target.value, 10);
                    setAmount(isNaN(val) ? 0 : val);
                  }}
                  className="w-full py-3 pl-12 pr-4 rounded-md border border-gray-200
                    focus:border-primary outline-none transition bg-transparent"
                />
              </div>
            </div>

            <h6 className="mt-4 font-bold">Payment Method</h6>
            <p className="mt-1 mb-4">
              Choose your payment method for top up account
            </p>
            <div className="grid gap-5 mb-6">
              {[
                { image: "/image/Bank BRI (Bank Rakyat Indonesia).svg", title: "Bank Rakyat Indonesia", id: "bri" },
                { image: "/image/Logo DANA.svg", title: "Dana", id: "dana" },
                { image: "/image/BCA.svg", title: "Bank Central Asia", id: "bca" },
                { image: "/image/Gopay.svg", title: "Gopay", id: "gopay" },
                { image: "/image/Ovo.svg", title: "Ovo", id: "ovo" },
              ].map((method) => (
                <label
                  key={method.id}
                  className={`flex h-15 rounded-lg w-full items-center px-4 cursor-pointer
                    ${selectedMethod === method.id
                      ? "bg-blue-50 border border-primary"
                      : "bg-[#E8E8E84D]"}
                    max-md:h-auto max-md:py-3`}
                >
                  <input
                    type="radio"
                    name="payment_method"
                    value={method.id}
                    checked={selectedMethod === method.id}
                    onChange={() => setSelectedMethod(method.id)}
                  />
                  <div className="flex items-center ml-4 max-md:ml-3">
                    <img className="w-12 h-12 max-md:w-10 max-md:h-10"
                      src={method.image} alt={method.title} />
                  </div>
                  <h6 className="ml-4 text-secondary text-medium">
                    {method.title}
                  </h6>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TopUpAccountInformation;