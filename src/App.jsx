import { Route, Routes } from "react-router";
import Setting from "./components/setting/Setting";
import TodoList from "./components/todos/TodoList";
import Profile from "./components/profile/Profile";
import Navigation from "./components/common/Navigation";
import Layout from "./components/layout/Layout";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="max-w-screen-sm md:max-w-sm mx-auto relative h-screen overflow-hidden bg-[#1e1b2e]">
        <Routes>
          <Route path="/setting" element={<Setting />} />
          <Route path="/" element={<Layout />} />
          <Route path="/todos" element={<TodoList />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Navigation />
      </div>
    </BrowserRouter>
  );
}

export default App;
