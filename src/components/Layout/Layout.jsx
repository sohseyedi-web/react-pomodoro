import Header from "./Header";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { useState, useEffect, useRef } from "react";
import * as RiIcon from "react-icons/ri";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { useSetting } from "./../../context/SettingProvider";
import { toast } from "react-hot-toast";
import { useTimer } from "../../context/TimerProvider";

const red = "#f54e4e";
const green = "#4aec8c";

const Layout = () => {
  const { timers } = useTimer();
  const AllSettings = useSetting();
  const [paused, setPaused] = useState(true);
  const [mode, setMode] = useState("work");
  const [secondsLeft, setSecondsLeft] = useState(0);
  const activeTimer = timers.find((t) => t.onActive === true);

  const modeRef = useRef(mode);
  const secondRef = useRef(secondsLeft);
  const pausedRef = useRef(paused);

  function tick() {
    secondRef.current--;
    setSecondsLeft(secondRef.current);
  }

  useEffect(() => {
    const swithMode = () => {
      const nextMode = modeRef.current === "work" ? "break" : "work";
      const nextSeconds =
        (nextMode === "work"
          ? AllSettings.workMinutes
          : AllSettings.breakMinutes) * 60;

      setMode(nextMode);
      modeRef.current = nextMode;

      setSecondsLeft(nextSeconds);
      secondRef.current = nextSeconds;
    };

    secondRef.current = AllSettings.workMinutes * 60;
    setSecondsLeft(secondRef.current);

    const interval = setInterval(() => {
      if (pausedRef.current) {
        return;
      }
      if (secondRef.current === 0) {
        return swithMode();
      }
      tick();
    }, 1000);
    return () => clearInterval(interval);
  }, [AllSettings]);

  // calculation minutes % seconds
  const totalSeconds =
    mode === "work"
      ? AllSettings.workMinutes * 60
      : AllSettings.breakMinutes * 60;
  const progressValue = Math.round((secondsLeft / totalSeconds) * 100);
  let minutes = Math.floor(secondsLeft / 60);
  let seconds = secondsLeft % 60;
  if (seconds < 10) seconds = "0" + seconds;

  // handler for start,stop,repeat timer
  const stopTimer = () => {
    setPaused(true);
    pausedRef.current = true;
    toast.success("زمان متوقف شد");
  };

  const resetTimer = () => {
    setPaused(true);
    pausedRef.current = true;
    modeRef.current === "work";
    secondRef.current = AllSettings.workMinutes * 60;
    setMode(modeRef.current);
    setSecondsLeft(secondRef.current);
  };

  const startTimer = () => {
    if (activeTimer) {
      setPaused(false);
      pausedRef.current = false;
      toast.success("زمان شروع شد");
    } else {
      toast.error("اول کار رو انتخاب کن");
    }
  };
  return (
    <section className="flex flex-col items-center justify-center mt-6 md:w-[450px] w-[95%] container mx-auto">
      <Header />
      <main className="card my-3 w-full text-center">
        <div className="w-[300px] mx-auto px-4">
          <CircularProgressbar
            value={progressValue}
            text={minutes + ":" + seconds}
            styles={buildStyles({
              textColor: "#fff",
              pathColor: mode === "work" ? red : green,
              tailColor: "rgba(255,255,255,.2)",
            })}
          />
        </div>

        {paused ? (
          <button className="btnFull mt-3" onClick={startTimer}>
            <RiIcon.RiPlayFill size={32} />
          </button>
        ) : (
          <div className="flex items-center justify-center">
            <button className="btnFull" onClick={resetTimer}>
              <RiIcon.RiRepeat2Line size={32} />
            </button>
            <button className="btnFull" onClick={stopTimer}>
              <RiIcon.RiPauseFill size={32} />
            </button>
          </div>
        )}
        <div className="absolute left-2 top-2">
          <button
            className="btnFull"
            onClick={() => AllSettings.setShowSettings(true)}
          >
            <RiIcon.RiSettings3Fill size={32} />
          </button>
        </div>
      </main>
      <TodoForm />
      <TodoList onReset={resetTimer} />
    </section>
  );
};

export default Layout;
