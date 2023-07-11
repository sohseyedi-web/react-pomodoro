import { Route, Routes } from "react-router-dom";
import Navigation from "./components/common/Navigation";
import Profile from "./components/Profile";
import Setting from "./components/Setting";
import Timer from "./components/timer/Timer";
import TodoList from "./components/todos/TodoList";

function App() {
  return (
    <div className="max-w-screen-sm md:max-w-sm mx-auto relative h-screen overflow-hidden dark:bg-[#1e1b2e] bg-gray-100">
      <Routes>
        <Route path="/todos" element={<TodoList />} />
        <Route path="/" element={<Timer />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Navigation />
    </div>
  );
}

export default App;
