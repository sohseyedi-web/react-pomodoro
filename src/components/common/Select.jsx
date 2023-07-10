import * as RiIcon from "react-icons/ri";
import { useState } from "react";

const Select = ({ title, type }) => {
  const [open, setOpen] = useState();

  return (
    <div
      className={`${
        open ? "h-[230px]" : "h-[55px]"
      }  bg-[#2c2e3e] text-white w-[90%] flex flex-col px-2 mx-auto my-2 rounded-2xl shadow-md py-3 mt-5 transition-all duration-300`}
    >
      <div
        className="flex items-center cursor-pointer justify-between"
        onClick={() => setOpen(!open)}
      >
        <h5 className={`text-lg font-semibold m-0`}>{title}</h5>
        <span
          className={
            open
              ? "rotate-180 transition-all duration-300"
              : "rotate-0 transition-all duration-300"
          }
        >
          <RiIcon.RiArrowDropDownLine size={32} />
        </span>
      </div>
      {open && (
        <div className="mt-5">
          <p className="mb-3 text-sm leading-8">
            {type === "org"
              ? `تکنیک پومودورو که از آن گاهی با عنوان فن پومودورو هم یاد می‌شود،
            ابزاری برای مدیریت زمان است. پومودورو بر یک ایده اصلی استوار است:
            اینکه انسان نمی‌تواند به صورت پیوسته و برای مدت طولانی، تمرکز ذهنی و
            توان فیزیکی خود را بر روی یک موضوع یا یک هدف مشخص حفظ کند.`
              : `
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
            `}
          </p>
        </div>
      )}
    </div>
  );
};

export default Select;
