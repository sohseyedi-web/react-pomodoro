import TodoForm from "./TodoForm";
import * as RiIcon from "react-icons/ri";
import { useTimer, useTimerDispatch } from "../../context/TimerProvider";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

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
          <p className="text-center text-white">یادداشتی وجود ندارد</p>
        ) : (
          timers.map((time) => (
            <li
              key={time.id}
              className="border-2 border-[#9190d9] my-2 px-2 w-[90%] mx-auto text-white shadow-md py-2 rounded-md flex items-center justify-between"
            >
              <h5 className={`text-lg font-semibold m-0 `}>{time.title}</h5>
              <div className="flex items-center gap-x-3">
                <span
                  className={`${
                    !time.onActive ? "bg-[#9190d9]" : "bg-green-500"
                  } text-white cursor-pointer transition-all duration-300 p-[6px]  rounded-md`}
                  onClick={() => activeItemHandler(time)}
                >
                  <RiIcon.RiCheckLine size={21} />
                </span>
                <span
                  className="text-white cursor-pointer z-30 p-[6px] bg-[#9190d9] rounded-md"
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
