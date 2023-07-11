import TodoForm from "./TodoForm";
import { toast } from "react-hot-toast";
import * as RiIcon from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useTimer, useTimerDispatch } from "../../context/TimerProvider";

const TodoList = () => {
  const { timers } = useTimer();
  const dispatch = useTimerDispatch();
  const navigate = useNavigate();

  const removeItemHandler = (timer) => {
    dispatch({ type: "REMOVE_TODO", payload: timer });
    toast.error("حذف شد");
  };

  const activeItemHandler = (timer) => {
    dispatch({ type: "ACTIVE_TODO", payload: timer });
    toast.success("فعال شد");
    navigate("/");
  };

  return (
    <>
      <h4 className="title">
        یادداشت ها
      </h4>
      <TodoForm />
      <ul className="my-3 h-[580px] overflow-y-auto lists">
        {timers.length === 0 ? (
          <p className="text-center">یادداشتی وجود ندارد</p>
        ) : (
          timers.map((time) => (
            <li
              key={time.id}
              className="border-2  dark:border-[#9190d9] border-[#6b4ca6] my-2 px-2 w-[90%] mx-auto shadow-md py-2 rounded-md flex items-center justify-between"
            >
              <h5 className={`text-lg font-semibold m-0 `}>{time.title}</h5>
              <div className="flex items-center gap-x-3">
                <span
                  className={`${
                    !time.onActive ? "dark:bg-[#9190d9] bg-[#6b4ca6]" : "dark:bg-green-500 bg-green-700"
                  } text-white cursor-pointer transition-all duration-300 p-[6px]  rounded-md`}
                  onClick={() => activeItemHandler(time)}
                >
                  <RiIcon.RiCheckLine size={21} />
                </span>
                <span
                  className="text-white cursor-pointer z-30 p-[6px] dark:bg-[#9190d9] bg-[#6b4ca6] rounded-md"
                  onClick={() => removeItemHandler(time)}
                >
                  <RiIcon.RiDeleteBin5Fill size={21} />
                </span>
              </div>
            </li>
          ))
        )}
      </ul>
    </>
  );
};

export default TodoList;
