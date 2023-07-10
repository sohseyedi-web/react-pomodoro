import Header from "./Header";
import { useState, useEffect, useRef } from "react";
import * as FaIcon from "react-icons/fa";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { useSetting } from "../../context/SettingProvider";
import { toast } from "react-hot-toast";
import { useTimer } from "../../context/TimerProvider";
import { Link } from "react-router-dom";

const red = "#6b4ca6";
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
    <section>
      <h4 className="text-center text-white font-semibold pt-3 text-2xl">
        پومودورو
      </h4>
      <Header active={activeTimer} />
      {!activeTimer ? (
        <Link
          to={"/todos"}
          className="w-[50px] h-[50px] rounded-full shadow-md border-none bg-[#6b4ca6] text-white flex items-center justify-center text-3xl mx-auto"
        >
          <FaIcon.FaArrowLeft size={20} />
        </Link>
      ) : (
        <main className="mt-20">
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
          <button className="mt-5 w-[50px] h-[50px] rounded-full shadow-md border-none bg-[#6b4ca6] text-white flex items-center justify-center text-3xl mx-auto">
            {paused ? (
              <FaIcon.FaPlay size={20} onClick={startTimer} />
            ) : (
              <FaIcon.FaPause size={20} onClick={stopTimer} />
            )}
          </button>
        </main>
      )}
    </section>
  );
};

export default Layout;
