import * as RiIcon from "react-icons/ri";
import { toast } from "react-hot-toast";
import { useSetting } from "../../context/SettingProvider";
import { useDark } from "../../context/ThemeProvider";

const Setting = () => {
  const AllSettings = useSetting();
  const { dark, setDark } = useDark();

  const incrementWorkTime = () => {
    AllSettings.setWorkMinutes((prevState) => prevState + 1);
  };
  const increaseWorkTime = () => {
    if (AllSettings.workMinutes !== 0) {
      AllSettings.setWorkMinutes((prevState) => prevState - 1);
    } else {
      toast.success("دیگه نمیشه!");
    }
  };
  const incrementBreakTime = () => {
    AllSettings.setBreakMinutes((prevState) => prevState + 1);
  };
  const increaseBreakTime = () => {
    if (AllSettings.breakMinutes !== 0) {
      AllSettings.setBreakMinutes((prevState) => prevState - 1);
    } else {
      toast.success("دیگه نمیشه!");
    }
  };

  const handleThemeSwitch = () => {
    setDark(dark === "dark" ? "light" : "dark");
  };

  return (
    // <section className="h-screen bg-slate-950 relative">
    //   <div className="flex items-center justify-center text-white mx-auto w-[300px] container pt-10 flex-col">
    //     <div className="my-5 gap-y-3 text-center">
    //       <h3 className="text-3xl font-semibold text-gray-100">زمان کار</h3>
    //       <div className="gap-x-7 flex items-center justify-center mt-5">
    //         <button className="btnFull text-3xl" onClick={increaseWorkTime}>
    //           -
    //         </button>
    //         <span className="text-2xl font-semibold">
    //           {AllSettings.workMinutes}
    //         </span>
    //         <button className="btnFull text-3xl" onClick={incrementWorkTime}>
    //           +
    //         </button>
    //       </div>
    //     </div>
    //     <div className="my-5 gap-y-3">
    //       <h3 className="text-3xl font-semibold text-gray-100">زمان استراحت</h3>
    //       <div className="gap-x-7 flex items-center justify-center mt-5">
    //         <button className="btnFull text-3xl" onClick={increaseBreakTime}>
    //           -
    //         </button>
    //         <span className="text-2xl font-semibold">
    //           {AllSettings.breakMinutes}
    //         </span>
    //         <button className="btnFull text-3xl" onClick={incrementBreakTime}>
    //           +
    //         </button>
    //       </div>
    //     </div>
    //     <div className="my-5 gap-y-3">
    //       <h3 className="text-3xl font-semibold text-gray-100">صفحه نمایش</h3>
    //       <div className="gap-x-7 flex items-center justify-center mt-5">
    //         {dark === "dark" ? (
    //           <button
    //             className="btnFull text-3xl transition-all duration-300"
    //             onClick={handleThemeSwitch}
    //           >
    //             <RiIcon.RiMoonFill />
    //           </button>
    //         ) : (
    //           <button
    //             className="btnFull text-3xl transition-all duration-300"
    //             onClick={handleThemeSwitch}
    //           >
    //             <RiIcon.RiSunFill />
    //           </button>
    //         )}
    //       </div>
    //     </div>
    //   </div>
    //   <div
    //     className="fixed right-3 top-3 text-white btnFull cursor-pointer"
    //     onClick={() => AllSettings.setShowSettings(false)}
    //   >
    //     <RiIcon.RiHome2Line size={30} />
    //   </div>
    // </section>
  <section>
    s
  </section>
  );
};

export default Setting;
