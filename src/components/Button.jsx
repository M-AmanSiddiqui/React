function Button( {label,bgColor,borderColor} ) {
    return(
<button className={`border ${borderColor ? borderColor : " border-blue-400" }  ${bgColor ? bgColor : " bg-white" } 

rounded-md p-1 m-4`} 

>{label}</button>
  );
}
export default Button