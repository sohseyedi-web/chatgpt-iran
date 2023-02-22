const Back = ({ open, setOpen }) => {
  return (
    open && (
      <div
        className="w-full h-full fixed top-0 left-0 bg-[rgba(0,0,0,.5)] z-40"
        onClick={() => setOpen(!open)}
      ></div>
    )
  );
};

export default Back;
