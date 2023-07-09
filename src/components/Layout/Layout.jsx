import Header from "./Header";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { useState, useEffect, useRef } from "react";
import * as RiIcon from "react-icons/ri";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { useSetting } from "../../context/SettingProvider";
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
    <section className="">
      <h3>s</h3>
    </section>
  );
};

export default Layout;
