/**
 * Button Component
 * @type {tipedata}
 * @param {Object} props
 * @param {String} [props.type="text"]
 * @param {String} props.placeholder
 * @param {String} props.name
 * @param {String} props.id
 * @param {String} props.icon
 * @return {JSX.Elements}
 * 
 */

const SearchNumberOrName = ({ type = "text", placeholder, name, id, icon }) => {
  return (
    <div className="w-[340px] h-[40px]">
      <div className="relative flex items-center">
        {icon && (
          <img 
            src={icon} 
            alt="" 
            className="absolute right-4 w-5 h-5 pointer-events-none" 
          />
        )}
        
        <input
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
          className={`w-full py-3 rounded-md border border-gray-200 focus:border-[#2948FF] outline-none transition bg-transparent ${icon ? 'pl-2' : 'pl-0'}`}
        />
      </div>
    </div>
  );
};
export default SearchNumberOrName;