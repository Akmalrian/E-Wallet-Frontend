const CardPaymentMethod = ({ type = "radio", title, name, id, image }) => {
  return (
    <label className="flex h-15 bg-[#E8E8E84D] rounded-lg w-full items-center px-4 max-md:h-auto max-md:py-3 max-md:gap-2">
      <input className="text-[#4f5665] text-medium" type={type} name={name} id={id}/>
      <div className="flex items-center ml-8 max-md:ml-3">
        <img className="w-14 h-14 max-md:w-10 max-md:h-10" src={image} alt="bank transfer" />
      </div>
      <h6 className="w-65.25 ml-5 text-secondary max-md:w-auto max-md:ml-3 max-md:text-sm">{title}</h6>
    </label>
  );
};
export default CardPaymentMethod;
