import { Route, Routes } from "react-router-dom";
import TodoList from "./components/todos/TodoList";
import Timer from "./components/layout/Layout";
import Setting from "./components/setting/Setting";
import Profile from "./components/profile/Profile";
import Navigation from './components/common/Navigation';

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
