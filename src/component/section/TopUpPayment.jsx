import { useState } from "react";
import { useNavigate } from "react-router";
import { useAppDispatch } from "../../store/hooks";
import { setDashboard } from "../../store/slices/authSlice";
import { topupAPI } from "../../services/transactionService";
import { getDashboardAPI } from "../../services/dashboardService";
import toast from "react-hot-toast";

function TopUpPayment({ amount, selectedMethod }) {
  const dispatch  = useAppDispatch();
  const navigate  = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const tax      = Math.floor(amount * 0.1);
  const subTotal = amount + tax;

  const handleSubmit = async () => {
    if (!amount || amount <= 0) {
      toast.error("Masukkan nominal top up terlebih dahulu!");
      return;
    }
    if (!selectedMethod) {
      toast.error("Pilih metode pembayaran terlebih dahulu!");
      return;
    }
    if (amount < 10000) {
      toast.error("Minimal top up Rp10.000!");
      return;
    }

    setIsLoading(true);
    try {
      //  selectedMethod.id karena sekarang object
      await topupAPI(selectedMethod.id, amount);

      toast.success(`Top Up Rp${amount.toLocaleString("id-ID")} berhasil!`);

      //  Refresh dashboard
      const dashboardResponse = await getDashboardAPI();
      dispatch(setDashboard(dashboardResponse.data));

      navigate("/dashboard");

    } catch (err) {
      toast.error(err.message || "Gagal melakukan top up");
    } finally {
      setIsLoading(false);
    }
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

        {/*  Tampilkan nama metode yang dipilih */}
        {selectedMethod && (
          <div className="flex justify-between text-xs text-gray-400">
            <p>Metode</p>
            <p className="capitalize font-medium text-gray-600">
              {selectedMethod.payment_name}
            </p>
          </div>
        )}

        <button
          onClick={handleSubmit}
          disabled={isLoading}
          className="w-full py-3 bg-primary text-white rounded-xl font-bold
            hover:bg-blue-700 transition
            disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? "Memproses..." : "Submit"}
        </button>

        <p className="text-gray-400">
          *Get Discount if you pay with Bank Central Asia
        </p>
      </div>
    </section>
  );
}

export default TopUpPayment;