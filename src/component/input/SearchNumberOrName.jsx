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

const SearchNumberOrName = ({ value, onChange, placeholder, icon, ...props }) => {
  return (
    <div className="relative flex items-center max-md:w-full">
      {icon && <img src={icon} className="absolute left-4 w-5 h-5" alt="search" />}
      <input
      {...props}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="md:w-85 w-37.5 h-10 pl-12 pr-4 py-2 border rounded-md outline-none focus:border-blue-500
      max-md:w-full"
      />
    </div>
  );
};
export default SearchNumberOrName;