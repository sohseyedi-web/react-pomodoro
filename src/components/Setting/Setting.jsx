import * as RiIcon from "react-icons/ri";
import BoxSetting from "../common/BoxSetting";
import { useSetting } from "./../../context/SettingProvider";
import { useDark } from "./../../context/ThemeProvider";

const Setting = () => {
  const AllSettings = useSetting();
  const { dark, setDark } = useDark();
  const handleThemeSwitch = () => {
    setDark(dark === "dark" ? "light" : "dark");
  };
  return (
    <>
      <h4 className="title">تنظیمات</h4>
      <BoxSetting
        title={"زمان کار"}
        value={AllSettings.workMinutes}
        setValue={AllSettings.setWorkMinutes}
      />
      <BoxSetting
        title={"زمان استراحت"}
        value={AllSettings.breakMinutes}
        setValue={AllSettings.setBreakMinutes}
      />

      <div
        className={`h-[100px]
        bg-[#2c2e3e] text-white w-[90%] flex flex-col mx-auto my-2 rounded-2xl shadow-md py-3 mt-5 transition-all duration-300`}
      >
        <div className="flex items-center justify-between px-4 w-full cursor-pointer">
          <h3>صفحه نمایش</h3>
          <div className="gap-x-1 flex items-center">
            <span>{dark === "dark" ? "تاریک" : "روشن"}</span>
          </div>
        </div>
        <div
          className={
            "flex items-center justify-center pt-5 text-center gap-x-5"
          }
        >
          <button
            onClick={handleThemeSwitch}
            className={`${
              dark === "light" && "text-[#9190d9]"
            } w-[35px] h-[35px] rounded-full shadow-md border-none transition-all duration-300 flex items-center justify-center text-3xl`}
          >
            <RiIcon.RiSunFill />
          </button>
          <button
            onClick={handleThemeSwitch}
            className={`${
              dark === "dark" && "text-[#9190d9]"
            } w-[35px] h-[35px] rounded-full shadow-md border-none transition-all duration-300 flex items-center justify-center text-3xl`}
          >
            <RiIcon.RiMoonFill />
          </button>
        </div>
      </div>
    </>
  );
};

export default Setting;
