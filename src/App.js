import { Routes, Route } from "react-router-dom";
import { AuthProvider, RequireAuth } from "./context/auth-context";
import Login from "./routes/Login";
import Layout from "./components/Layout";
import HomePage from "./routes/HomePage";
import MyPage from "./routes/MyPage";
import Register from "./routes/Register";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/my-page"
            element={
              <RequireAuth>
                <MyPage />
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
