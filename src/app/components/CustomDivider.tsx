const CustomDivider = ({
    thickness = 'h-1', // Tailwind height utility class
    color = 'bg-gray-400', // Tailwind background color utility class
    margin = 'my-4', // Tailwind margin utility class
    width = 'w-full', // Tailwind width utility class
  }) => {
    return (
      <div className={`${thickness} ${color} ${margin} ${width}`}></div>
    );
  };
  
  export default CustomDivider;
    

  