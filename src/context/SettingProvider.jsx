import { createContext, useContext, useState } from "react";

export const SettingContext = createContext();
const SettingProvider = ({ children }) => {
  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(25);
  const [breakMinutes, setBreakMinutes] = useState(5);

  return (
    <SettingContext.Provider
      value={{
        showSettings,
        setShowSettings,
        workMinutes,
        breakMinutes,
        setWorkMinutes,
        setBreakMinutes,
      }}
    >
      {children}
    </SettingContext.Provider>
  );
};

export default SettingProvider;

export const useSetting = () => useContext(SettingContext);
