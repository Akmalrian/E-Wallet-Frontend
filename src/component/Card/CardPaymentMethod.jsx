const CardPaymentMethod = ({ type = "radio", title, name, id, image }) => {
  return (
    <label className="flex h-15 bg-[#E8E8E84D] rounded-lg w-full items-center px-4">
      <input className="text-[#4f5665] text-[16px]" type={type} name={name} id={id}/>
      <div className="flex items-center ml-8">
        <img className="w-14 h-14" src={image} alt="bank transfer" />
      </div>
      <h6 className="w-65.25 ml-5 text-secondary">{title}</h6>
    </label>
  );
};
export default CardPaymentMethod;
