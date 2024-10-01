import { NavLink, Route, Routes } from "react-router-dom";
import Posts from "./Posts";
import Categories from "./Categories";
import Home from "./Home";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md">
        <ul className="flex justify-center space-x-8 py-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold"
                  : "text-gray-600 hover:text-blue-500"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/posts"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold"
                  : "text-gray-600 hover:text-blue-500"
              }
            >
              Posts
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/categories"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold"
                  : "text-gray-600 hover:text-blue-500"
              }
            >
              Categories
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Main Content Area */}
      <div className="container mx-auto py-8 px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:postId" element={<Posts />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:categoryId" element={<Categories />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
