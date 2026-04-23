import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { addBalance } from "../../store/slices/registerSlice";
import { syncCurrentUser } from "../../store/slices/authSlice";
import store from "../../store/store";
import toast from "react-hot-toast";

function TopUpPayment({ amount, selectedMethod }) {
  const dispatch = useAppDispatch();
  const { currentUser } = useAppSelector((state) => state.auth);

  const tax = Math.floor(amount * 0.1);
  const subTotal = amount + tax;

  const handleSubmit = () => {
    if (!amount || amount <= 0) {
      toast.error("Masukkan nominal top up terlebih dahulu!");
      return;
    }
    if (!selectedMethod) {
      toast.error("Pilih metode pembayaran terlebih dahulu!");
      return;
    }

    dispatch(addBalance({ username: currentUser.username, amount }));

    setTimeout(() => {
      const updatedUsers = store.getState().register.users;
      const updatedUser = updatedUsers.find(
        (u) => u.username === currentUser.username
      );
      if (updatedUser) dispatch(syncCurrentUser(updatedUser));
    }, 0);

    toast.success(`Top Up Rp${amount.toLocaleString("id-ID")} berhasil!`);
  };

  return (
    <section className="mt-20 text-[14px] flex p-6 justify-center rounded-sm
      relative md:right-10 bg-white shadow h-auto w-85.25 font-montserrat
      max-md:mt-6 max-md:mx-4 max-md:w-auto max-md:right-0 max-md:mb-28 max-md:rounded-xl">
      <div className="grid gap-5 w-full">
        <h6 className="font-semibold text-medium">Payment</h6>

        <div className="flex justify-between">
          <p>Order</p>
          <b>Rp{amount.toLocaleString("id-ID")}</b>
        </div>

        <div className="flex justify-between">
          <p>Delivery</p>
          <b>Rp0</b>
        </div>

        <div className="flex justify-between">
          <p>Tax (10%)</p>
          <b>Rp{tax.toLocaleString("id-ID")}</b>
        </div>

        <img src="/image/line2.svg" alt="image line" />

        <div className="flex justify-between">
          <p>Sub Total</p>
          <b className="text-primary">Rp{subTotal.toLocaleString("id-ID")}</b>
        </div>

        {selectedMethod && (
          <div className="flex justify-between text-xs text-gray-400">
            <p>Metode</p>
            <p className="capitalize font-medium text-gray-600">{selectedMethod}</p>
          </div>
        )}

        <button
          onClick={handleSubmit}
          className="w-full py-3 bg-primary text-white rounded-xl font-bold
            hover:bg-blue-700 transition"
        >
          Submit
        </button>

        <p className="text-gray-400">
          *Get Discount if you pay with Bank Central Asia
        </p>
      </div>
    </section>
  );
}

export default TopUpPayment;

