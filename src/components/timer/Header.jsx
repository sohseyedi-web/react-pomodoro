
import * as RiIcon from "react-icons/ri";

const Header = ({active}) => {
  

  return (
    <header className="my-5 w-[90%] mx-auto rounded-3xl text-white px-4 bg-[#6b4ca6] py-3 text-lg text-center">
      <div className="flex items-center justify-between">
        {!active ? (
          <p className="text-center w-full">کاری انتخاب نشده است</p>
        ) : (
          <>
            <h6>کار :  {active.title}</h6>
            <button>
              <RiIcon.RiPencilFill size={26} />
            </button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
