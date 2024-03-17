const Button = ({ children, onClick }) => (
    <div
      className="w-[33vw] md:w-[23vw] h-[4vh] p-3 bg-indigo-300 rounded-sm shadow border border-black justify-center items-center gap-2 inline-flex drop-shadow-md cursor-pointer hover:bg-indigo-400 transition-colors duration-300"
      onClick={onClick}
    >
      <div className="grow shrink basis-0 text-center text-black text-l font-semibold font-sans">
        {children}
      </div>
    </div>
  );
  
  export default Button;
  