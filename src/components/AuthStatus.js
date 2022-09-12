import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth-context";
import { Text } from "@chakra-ui/react";

function AuthStatus() {
  let auth = useAuth();
  let navigate = useNavigate();

  const userType = () => {
    if (!auth.user.cpf && !auth.user.crm) {
      return "Secretaria";
    } else if (auth.user.cpf) {
      return "Paciente";
    } else if (auth.user.crm) {
      return "Médico";
    }
  };

  if (!auth.user) {
    return (
      <p>
        Você não está logado. Deseja{" "}
        <button
          onClick={() => {
            navigate("/login");
          }}
        >
          <Text color={"blue"} textDecoration="underline">
            Logar?
          </Text>
        </button>
      </p>
    );
  }

  return (
    <p>
      Bem vindo(a) {auth.user?.name}, você esta logado como: {userType()}!
      Deseja{" "}
      <button
        onClick={() => {
          auth.signout(() => navigate("/"));
        }}
      >
        <Text color={"blue"} textDecoration="underline">
          Sair?
        </Text>
      </button>
    </p>
  );
}

export default AuthStatus;
