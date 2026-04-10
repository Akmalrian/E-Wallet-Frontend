
import ButtonLogin from "../button/ButtonLogin";
import InputNominal from "../input/InputNominal";

function SetNominal() {
  return (
    <section className="mt-6 text-medium font-montserrat">
      <div className="flex mx-4 items-center font-semibold gap-4 mb-8">
        <img src="/image/SendBlue.svg" alt="icon history" />
        <p>Transfer Money</p>
      </div>
      <div className="ml-4 flex items-center gap-4 mb-8">
        <img src="/image/number1black.svg" alt="icon number 1" />
        <p>Find People</p>
        <img src="/image/VectorDotted.svg" alt="vector dotted" />
        <img src="/image/number2blue.svg" alt="icon number 2" />
        <p>Set Nominal</p>
        <img src="/image/VectorDotted.svg" alt="vector dotted" />
        <img src="/image/number3.svg" alt="icon number 3" />
        <p>Finish</p>
      </div>
      <div className="mx-4 w-280 h-205 justify-between shadow">
        <div>
          <p className="font-semibold px-10 py-5">People Infromation</p>
        </div>
        <div>
          <div className="ml-10 mr-10">
            <div className="flex justify-between items-center h-28.75 w-full p-4 bg-[#E8E8E84D] ">
              <div className="flex items-center">
                <img className="w-20 h-20" src="/image/historyPhoto.svg" alt="Ghaluh Photo" />
                <div className="ml-5 grid gap-2">
                  <h6 className="font-bold">Ghaluh 1</h6>
                  <p>(239) 555-0108</p>
                  <img src="/image/verified.svg" alt="icon verified" />
                </div>
              </div>
              <img className="w-6 h-6" src="/image/Star.svg" alt="icon star" />
            </div>
            <h6 className="mt-5 font-bold">Amount</h6>
            <p className="mt-1">
              Type the amount you want to transfer and then press continue to
              the next steps.
            </p>
            <InputNominal
              type="text"
              placeholder="Enter Nominal Transfer"
              id="text"
              icon="/image/u_money-bill.svg"
            />
            <h6 className="mt-4 font-bold">Notes</h6>
            <p className="mt-1 mb-4">
              You can add some notes for this transfer such as payment coffee or
              something
            </p>
            <textarea className="w-full h-55.75 p-3 border border-gray-400 mb-4 " placeholder="Enter Some Notes"></textarea>
            <a href="transferEnterPin.html">
              <ButtonLogin type="submit">
              Submit & Transfer
              </ButtonLogin>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SetNominal;
