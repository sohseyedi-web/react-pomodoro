import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import TodoList from "./components/todos/TodoList";
import Layout from "./components/layout/Layout";
import Setting from "./components/setting/Setting";
import Profile from "./components/profile/Profile";

function App() {
  return (
    <BrowserRouter>
      <div className="max-w-screen-sm md:max-w-sm mx-auto relative h-screen overflow-hidden bg-[#1e1b2e]">
        <Routes>
          <Route path="/todos" element={<TodoList />} />
          <Route path="/" element={<Layout />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Navigation />
      </div>
    </BrowserRouter>
  );
}

export default App;
