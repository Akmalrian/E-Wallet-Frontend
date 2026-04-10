import CardHistoryDashboard from "../Card/CardHistoryDashboard";

function TransactionHistory() {
  return (
    <section className="mt-10 text-medium md:w-85.25 h-216.75 shadow w-full">
      <div className="flex mx-4 justify-between items-center">
        <p className="text-medium mt-5 font-semibold">Transaction History</p>
        <p className="text-tiny mt-5 text-primary font-medium">See All</p>
      </div>
      <div className="grid gap-8 mx-4 mt-5">
        <CardHistoryDashboard
        icon="/public/image/1(9).svg"
        title="Robert Fox"
        text="Transfer"
        detail="+Rp50.000"
        />
        <CardHistoryDashboard
        icon="/public/image/1(8).svg"
        title="Floyd Miles"
        text="Send"
        detail="-Rp50.000"
        />
        <CardHistoryDashboard
        icon="/public/image/1(7).svg"
        title="Ujang"
        text="Send"
        detail="-Rp50.000"
        />
        <CardHistoryDashboard
        icon="/public/image/1(6).svg"
        title="Raulemons"
        text="Transfer"
        detail="+Rp50.000"
        />
        <CardHistoryDashboard
        icon="/public/image/1(5).svg"
        title="Reiva"
        text="Transfer"
        detail="+Rp50.000"
        />
        <CardHistoryDashboard
        icon="/public/image/1(4).svg"
        title="Thobie"
        text="Send"
        detail="-Rp50.000"
        />
        <CardHistoryDashboard
        icon="/public/image/1(3).svg"
        title="Buzjany"
        text="Transfer"
        detail="+Rp50.000"
        />
        <CardHistoryDashboard
        icon="/public/image/1(2).svg"
        title="Adisurya"
        text="Send"
        detail="-Rp50.000"
        />
        <CardHistoryDashboard
        icon="/public/image/1(1).svg"
        title="Miguelle"
        text="Transfer"
        detail="+Rp50.000"
        />
      </div>
    </section>
  )
}

export default TransactionHistory;
