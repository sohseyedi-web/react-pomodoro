import { useTimer } from "../../context/TimerProvider";

const Header = () => {
  const { timers } = useTimer();

  const activeTimer = timers.find((t) => t.onActive === true);

  return (
    <header className="card text-xl font-semibold text-center">
      {activeTimer ? activeTimer.title : "هنوز کاری انتخاب نشده است"}
    </header>
  );
};

export default Header;
