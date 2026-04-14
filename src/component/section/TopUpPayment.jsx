import ButtonLogin from "../button/ButtonLogin";

function TopUpPayment() {
  return (
    <section className="mt-20 text-[14px] flex p-6 justify-center rounded-sm relative md:right-10 bg-white shadow h-94.5 w-85.25 font-montserrat
    max-md:mt-6 max-md:mx-4 max-md:w-auto max-md:h-auto max-md:right-0 max-md:mb-28 max-md:rounded-xl">
      <div className="grid gap-5">
        <h6 className="font-semibold text-medium ">Payment</h6>
        <div className="flex justify-between">
          <p>Order</p>
          <b>Idr.40.000</b>
        </div>
        <div className="flex justify-between">
          <p>Delivery</p>
          <b>Idr.0</b>
        </div>
        <div className="flex justify-between">
          <p>Tax</p>
          <b>Idr.4000</b>
        </div>
        <img src="/image/line2.svg" alt="image line" />
        <div className="flex justify-between">
          <p>Sub Total</p>
          <b>Idr.44.000</b>
        </div>
        <ButtonLogin>Submit</ButtonLogin>
        <p>*Get Discount if you pay with Bank Central Asia</p>
      </div>
    </section>
  );
}

export default TopUpPayment;
