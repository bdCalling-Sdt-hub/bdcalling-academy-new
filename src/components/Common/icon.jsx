const Icon = ({ children }) => {
  return (
    <div className="w-10 h-10 bg-black flex justify-center items-center rounded-lg hover:bg-[#1796fd] duration-300 cursor-pointer">
      {children}
    </div>
  );
};

export default Icon;
