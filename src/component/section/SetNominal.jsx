import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import ButtonLogin from "../button/ButtonLogin";
import PinModal from "./PinModal";
import TransferSuccessModal from "./TransferSuccesModal";
import TransferFailedModal from "./TransferFailedModal";
import { useAppSelector } from "../../store/hooks";
import toast from "react-hot-toast";

const BASE_URL = import.meta.env.VITE_API_URL?.replace("/api/v1", "")
  || "http://localhost:9000";

function SetNominal() {
  const [isPinModalOpen, setIsPinModalOpen]       = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isFailedModalOpen, setIsFailedModalOpen]   = useState(false);
  const [amount, setAmount]                         = useState("");
  const [notes, setNotes]                           = useState("");

  const { dashboard } = useAppSelector((state) => state.auth);

  // ✅ Ambil data penerima dari URL params
  const [searchParams] = useSearchParams();
  const walletId = Number(searchParams.get("wallet_id"));
  const name     = decodeURIComponent(searchParams.get("name")  || "Unknown");
  const phone    = decodeURIComponent(searchParams.get("phone") || "-");
  const photoPath = decodeURIComponent(searchParams.get("photo") || "");

  const image = photoPath
    ? `${BASE_URL}${photoPath}`
    : "/image/historyPhoto.svg";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const nominal = parseInt(amount.replace(/\D/g, ""), 10);

    if (!nominal || nominal <= 0) {
      toast.error("Masukkan nominal yang valid!");
      return;
    }

    if (nominal > (dashboard?.balance || 0)) {
      toast.error(
        `Saldo tidak mencukupi! Saldo kamu: Rp${(dashboard?.balance || 0).toLocaleString("id-ID")}`
      );
      return;
    }

    setIsPinModalOpen(true);
  };

  return (
    <section className="mt-6 text-medium font-montserrat">
      <div className="flex mx-4 items-center font-semibold gap-4 mb-8">
        <img src="/image/SendBlue.svg" alt="icon history" />
        <p>Transfer Money</p>
      </div>

      <div className="ml-4 flex items-center gap-4 mb-8
        max-md:flex-wrap max-md:gap-2 max-md:ml-4">
        <img src="/image/number1black.svg" alt="icon number 1" />
        <p>Find People</p>
        <img src="/image/VectorDotted.svg" alt="vector dotted" className="max-md:hidden" />
        <img src="/image/number2blue.svg" alt="icon number 2" />
        <p>Set Nominal</p>
        <img src="/image/VectorDotted.svg" alt="vector dotted" className="max-md:hidden" />
        <img src="/image/number3.svg" alt="icon number 3" />
        <p>Finish</p>
      </div>

      <div className="mx-4 w-280 h-186.75 justify-between shadow
        max-md:w-auto max-md:h-auto max-md:mx-4 max-md:pb-28">
        <div>
          <p className="font-semibold px-10 py-5">People Information</p>
        </div>
        <div>
          <div className="ml-10 mr-10 max-md:ml-4 max-md:mr-4">

            {/* Info Penerima */}
            <div className="flex justify-between items-center h-28.75 w-full
              p-4 bg-[#E8E8E84D]">
              <div className="flex items-center">
                <img
                  className="w-20 h-20 rounded-full object-cover"
                  src={image}
                  alt={name}
                  onError={(e) => { e.target.src = "/image/historyPhoto.svg"; }}
                />
                <div className="ml-5 grid gap-2">
                  <h6 className="font-bold">{name}</h6>
                  <p>{phone}</p>
                  <img src="/image/verified.svg" alt="icon verified" />
                </div>
              </div>
              <img className="w-6 h-6" src="/image/Star.svg" alt="icon star" />
            </div>

            {/* Input Amount */}
            <h6 className="mt-5 font-bold">Amount</h6>
            <p className="mt-1">
              Type the amount you want to transfer and then press continue to the next steps.
            </p>
            <div className="w-full mt-2">
              <div className="relative flex items-center">
                <img
                  src="/image/u_money-bill.svg" alt=""
                  className="absolute left-4 w-5 h-5 pointer-events-none"
                />
                <input
                  type="text"
                  placeholder="Enter Nominal Transfer"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full py-3 pl-12 pr-4 rounded-md border border-gray-200
                    focus:border-primary outline-none transition bg-transparent"
                />
              </div>
            </div>

            <h6 className="mt-4 font-bold">Notes</h6>
            <p className="mt-1 mb-4">
              You can add some notes for this transfer such as payment coffee or something
            </p>
            <textarea
              className="w-full h-55.75 p-3 border border-gray-400 mb-4 max-md:h-32"
              placeholder="Enter Some Notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />

            <div onClick={handleSubmit}>
              <ButtonLogin type="button">Submit & Transfer</ButtonLogin>
            </div>
          </div>
        </div>
      </div>

      <PinModal
        isOpen={isPinModalOpen}
        onClose={() => setIsPinModalOpen(false)}
        onSuccess={() => {
          setIsPinModalOpen(false);
          setIsSuccessModalOpen(true);
        }}
        onFailed={() => {
          setIsPinModalOpen(false);
          setIsFailedModalOpen(true);
        }}
        recipientName={name}
        recipientImage={image}
        receiverWalletId={walletId}
        amount={parseInt(amount.replace(/\D/g, ""), 10) || 0}
        notes={notes}
      />

      <TransferSuccessModal
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
        onTransferAgain={() => setIsSuccessModalOpen(false)}
        recipientName={name}
      />

      <TransferFailedModal
        isOpen={isFailedModalOpen}
        onClose={() => setIsFailedModalOpen(false)}
        onTransferAgain={() => setIsFailedModalOpen(false)}
        recipientName={name}
      />
    </section>
  );
}

export default SetNominal;