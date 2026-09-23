const ResponcivedMenu = ({ openNav, setOpenNav }) => {
  return (
    <div
      className={`(openNav ? "left-0":"-left-[100%]") fixed top-0 bottom-0 z-20 flex h-screen w-[75%]  flex-col justify-between  bg-white px-8 pb-6 pt-16 rounded-r-xl text-black  shadow-md transition-all `}
    ></div>
  );
};

export default ResponcivedMenu;
