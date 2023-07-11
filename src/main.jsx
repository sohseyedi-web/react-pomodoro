import "./index.css";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import TimerProvider from "./context/TimerProvider";
import "react-circular-progressbar/dist/styles.css";
import ThemeProvider from "./context/ThemeProvider";
import SettingProvider from "./context/SettingProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TimerProvider>
      <SettingProvider>
        <ThemeProvider>
          <App />
          <Toaster />
        </ThemeProvider>
      </SettingProvider>
    </TimerProvider>
  </React.StrictMode>
);
