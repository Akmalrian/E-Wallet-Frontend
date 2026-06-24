import { useEffect, useState } from "react";
import { getHistoryAPI } from "../../services/dashboardService";
import CardHistoryDashboard from "../Card/CardHistoryDashboard";
import { Link } from "react-router";
import toast from "react-hot-toast";
import { useAppSelector } from "../../store/hooks";

const BASE_URL = import.meta.env.VITE_API_URL?.replace("", "")
  || "http://localhost:9000/ewallet";

function TransactionHistory() {
  const [histories, setHistories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { currentUser }           = useAppSelector((state) => state.auth);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await getHistoryAPI({ limit: 5, page: 1 });
        setHistories(response.data.transactions || []);
      } catch (err) {
        toast.error("Gagal memuat history");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchHistory();
  }, []);

  const formatAmount = (type, amount) => {
    const formatted = `Rp${Number(amount).toLocaleString("id-ID")}`;
    return type === "receive" || type === "topup"
      ? `+${formatted}`
      : `-${formatted}`;
  };

  const formatType = (type) => {
    if (type === "topup")    return "Top Up";
    if (type === "transfer") return "Transfer";
    if (type === "receive")  return "Received";
    return type;
  };

const getPhoto = (item) => {
    let photoPath = null;

    if (item.type === "receive" && item.sender_info?.photo_path) {
      photoPath = item.sender_info.photo_path;
    } else if (item.type === "transfer" && item.receiver_info?.photo_path) {
      photoPath = item.receiver_info.photo_path;
    }

    // Jika ada photo_path dari backend → gabungkan dengan BASE_URL
    if (photoPath) {
      return `${BASE_URL}${photoPath}`;
    }

    // Fallback icon berdasarkan type
    if (item.type === "topup") {
      return currentUser?.photo_path
        ? `${BASE_URL}${currentUser.photo_path}`
        : "/image/blank-photo.jpg";
    }
    if (item.type === "receive")  return "/image/1(6).svg";
    return "/image/1(8).svg";
  };

  //  Tampilkan nama pengirim jika receive
const getTitle = (item) => {
	if (item.type === "receive") {
		// Tampilkan nama pengirim
		return item.sender_info?.fullname
			|| item.sender_info?.phone_number
			|| "Someone";
	}
	if (item.type === "transfer") {
		//  Tampilkan nama penerima
		return item.receiver_info?.fullname
			|| item.receiver_info?.phone_number
			|| "Transfer";
	}
	if (item.type === "topup") return "Top Up";
	return "-";
};

  return (
    <section className="mt-10 text-medium md:w-85.25 h-216.75 shadow w-full
      max-md:h-auto max-md:shadow-none max-md:mt-4 max-md:pb-24">

      <div className="flex mx-4 justify-between items-center">
        <p className="text-medium mt-5 font-semibold">Transaction History</p>
        <Link to="/history">
          <p className="text-tiny mt-5 text-primary font-medium cursor-pointer">
            See All
          </p>
        </Link>
      </div>

      <div className="grid gap-8 mx-4 mt-5">
        {isLoading && (
          <p className="text-center text-gray-400 text-sm py-4">
            Memuat history...
          </p>
        )}

        {!isLoading && histories.length === 0 && (
          <p className="text-center text-gray-400 text-sm py-4">
            Belum ada transaksi
          </p>
        )}

        {!isLoading && histories.map((item) => (
          <CardHistoryDashboard
            key={item.id}
            icon={getPhoto(item)}
            title={getTitle(item)}       // ← nama pengirim jika receive
            text={formatType(item.type)}
            detail={formatAmount(item.type, item.amount)}
          />
        ))}
      </div>
    </section>
  );
}

export default TransactionHistory;