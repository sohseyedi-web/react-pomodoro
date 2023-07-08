const Back = ({ open, setOpen }) => {
    return (
      open && (
        <div
          className="fixed w-full h-full top-0 left-0 bg-[rgba(0,0,0,.5)] z-40"
          onClick={() => setOpen(!open)}
        ></div>
      )
    );
  };
  
  export default Back;