import CardHistoryDashboard from "./CardHistoryDashboard";

function Section2Dashboard() {
  return (
    <section className="mt-10 text-[16px] w-[341px] h-[867px] shadow">
      <div className="flex mx-4 justify-between items-center">
        <p className="text-[16px] mt-5 font-semibold">Transaction History</p>
        <p className="text-[12px] mt-5 text-[#2948FF] font-medium">See All</p>
      </div>
      <div className="grid gap-8 mx-4 mt-5">
        <CardHistoryDashboard
        icon="/src/assets/1(9).svg"
        title="Robert Fox"
        text="Transfer"
        detail="+Rp50.000"
        />
        <CardHistoryDashboard
        icon="/src/assets/1(8).svg"
        title="Floyd Miles"
        text="Send"
        detail="-Rp50.000"
        />
        <CardHistoryDashboard
        icon="/src/assets/1(7).svg"
        title="Ujang"
        text="Send"
        detail="-Rp50.000"
        />
        <CardHistoryDashboard
        icon="/src/assets/1(6).svg"
        title="Raulemons"
        text="Transfer"
        detail="+Rp50.000"
        />
        <CardHistoryDashboard
        icon="/src/assets/1(5).svg"
        title="Reiva"
        text="Transfer"
        detail="+Rp50.000"
        />
        <CardHistoryDashboard
        icon="/src/assets/1(4).svg"
        title="Thobie"
        text="Send"
        detail="-Rp50.000"
        />
        <CardHistoryDashboard
        icon="/src/assets/1(3).svg"
        title="Buzjany"
        text="Transfer"
        detail="+Rp50.000"
        />
        <CardHistoryDashboard
        icon="/src/assets/1(2).svg"
        title="Adisurya"
        text="Send"
        detail="-Rp50.000"
        />
        <CardHistoryDashboard
        icon="/src/assets/1(1).svg"
        title="Miguelle"
        text="Transfer"
        detail="+Rp50.000"
        />
      </div>
    </section>
  )
}

export default Section2Dashboard;
