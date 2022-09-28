import { Routes, Route } from "react-router-dom";
import { AuthProvider, RequireAuth } from "./context/auth-context";
import Login from "./routes/Login";
import Layout from "./components/Layout";
import HomePage from "./routes/HomePage";
import PacientPage from "./routes/PacientPage";
import MedicPage from "./routes/MedicPage";
import Register from "./routes/Register";
import SecretaryPage from "./routes/SecretaryPage";

function App() {
  return (
    //Arquivo onde cria as rotas e designa a um 'arquivo'
    <AuthProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/pacient-page"
            element={
              //Rotas com RequireAuth necessitam de estar logadas para entrar nas mesmas
              <RequireAuth>
                <PacientPage />
              </RequireAuth>
            }
          />
          <Route
            path="/medic-page"
            element={
              <RequireAuth>
                <MedicPage />
              </RequireAuth>
            }
          />
          <Route
            path="/secretary-page"
            element={
              <RequireAuth>
                <SecretaryPage />
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
