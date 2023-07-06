import { toast } from "react-hot-toast";
import * as RiIcon from "react-icons/ri";
import { useTimer, useTimerDispatch } from "../../context/TimerProvider";

const TodoList = ({ onReset }) => {
  const { timers } = useTimer();
  const dispatch = useTimerDispatch();

  const removeItemHandler = (timer) => {
    dispatch({ type: "REMOVE_TODO", payload: timer });
    onReset();
    toast.error("حذف شد");
  };

  const activeItemHandler = (timer) => {
    dispatch({ type: "ACTIVE_TODO", payload: timer });
    onReset();
    toast.success("فعال شد");
  };

  return (
    <ul className="w-full">
      {timers.map((timer) => (
        <li
          key={timer.id}
          className="my-5 card px-2 flex items-center justify-between"
        >
          <h5 className={`text-lg font-semibold m-0`}>{timer.title}</h5>
          <div className="flex items-center gap-x-2 ">
            <span
              className="text-white cursor-pointer z-30 p-[6px] bg-gray-900 rounded-md"
              onClick={() => activeItemHandler(timer)}
            >
              <RiIcon.RiCheckLine size={21} />
            </span>
            <span
              className="text-white cursor-pointer z-30 p-[6px] bg-gray-900 rounded-md"
              onClick={() => removeItemHandler(timer)}
            >
              <RiIcon.RiDeleteBin5Fill size={21} />
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
