import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  RadioGroup,
  Stack,
  Radio,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../services/auth";

function Register() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const [type, setType] = useState("");

 //Funçao responsavel por receber as variaveis para o registro e realizar o request do mesmo
  async function handleSubmit(event) {
    setIsLoading(true);
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");
    const username = formData.get("username");
    const name = formData.get("name");
    const cellphone = formData.get("cellphone");
    const cpf = formData.get("cpf");
    const city = formData.get("city");
    const street = formData.get("street");
    const neighborhood = formData.get("neighborhood");
    const age = formData.get("age");
    const gender = formData.get("gender");
    const crm = formData.get("crm");
    const specialty = formData.get("specialty");

    let data = null;

    if (type === "pacient") {
      data = {
        email,
        password,
        username,
        name,
        cellphone,
        cpf,
        city,
        street,
        neighborhood,
        age,
        gender,
        type,
      };
    } else if (type === "medic") {
      data = {
        email,
        password,
        username,
        name,
        cellphone,
        crm,
        specialty,
        type,
      };
    } else {
      data = {
        email,
        password,
        username,
        name,
        cellphone,
        type,
      };
    }

    try {
      await signup(data);
      setIsLoading(false);
      navigate("/login", { replace: true });
    } catch (error) {}
  }

  return (
    <Flex alignSelf={"center"}>
      <FormControl as={"form"} onSubmit={handleSubmit} mt={["32px"]}>
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input
          width={["100%"]}
          height={["40px"]}
          name="email"
          type="email"
          placeholder="Email"
        />
        <FormLabel htmlFor="username" mt={"32px"}>
          Usuario
        </FormLabel>
        <Input
          width={["100%"]}
          height={["40px"]}
          name="username"
          type="text"
          placeholder="Usuario"
        />
        <FormLabel htmlFor="name" mt={"32px"}>
          Nome
        </FormLabel>
        <Input
          width={["100%"]}
          height={["40px"]}
          name="name"
          type="text"
          placeholder="Nome"
        />
        <FormLabel htmlFor="cellphone" mt={"32px"}>
          Telefone
        </FormLabel>
        <Input
          width={["100%"]}
          height={["40px"]}
          name="cellphone"
          type="number"
          placeholder="Telefone"
        />
        <Flex justify={["space-between"]}>
          <FormLabel mt="32px" htmlFor="senha">
            Senha
          </FormLabel>
        </Flex>
        <InputGroup>
          <Input
            width={["100%"]}
            height={["40px"]}
            name="password"
            type="password"
            placeholder="Senha"
          />
        </InputGroup>
        <RadioGroup mt={"32px"} onChange={setType} value={type}>
          <Stack direction="row">
            <Radio value="pacient">Paciente</Radio>
            <Radio value="medic">Medico (a)</Radio>
            <Radio value="secretary">Secretario (a)</Radio>
          </Stack>
        </RadioGroup>

        {type === "pacient" && (
          <Flex direction={"column"} key={type}>
            <FormLabel htmlFor="cpf" mt={"32px"}>
              CPF
            </FormLabel>
            <Input
              width={["100%"]}
              height={["40px"]}
              name="cpf"
              type="number"
              placeholder="CPF"
            />
            <FormLabel htmlFor="city" mt={"32px"}>
              Cidade
            </FormLabel>
            <Input
              width={["100%"]}
              height={["40px"]}
              name="city"
              type="text"
              placeholder="Cidade"
            />
            <FormLabel htmlFor="street" mt={"32px"}>
              Rua
            </FormLabel>
            <Input
              width={["100%"]}
              height={["40px"]}
              name="street"
              type="text"
              placeholder="Rua"
            />
            <FormLabel htmlFor="neighborhood" mt={"32px"}>
              Bairro
            </FormLabel>
            <Input
              width={["100%"]}
              height={["40px"]}
              name="neighborhood"
              type="text"
              placeholder="Bairro"
            />
            <FormLabel htmlFor="age" mt={"32px"}>
              Idade
            </FormLabel>
            <Input
              width={["100%"]}
              height={["40px"]}
              name="age"
              type="number"
              placeholder="Idade"
            />
            <FormLabel htmlFor="gender" mt={"32px"}>
              Genero
            </FormLabel>
            <Input
              width={["100%"]}
              height={["40px"]}
              name="gender"
              type="text"
              placeholder="Genero"
            />
          </Flex>
        )}
        {type === "medic" && (
          <Flex direction={"column"} key={type}>
            <FormLabel htmlFor="crm" mt={"32px"}>
              CRM
            </FormLabel>
            <Input
              width={["100%"]}
              height={["40px"]}
              name="crm"
              type="number"
              placeholder="CRM"
            />
            <FormLabel htmlFor="specialty" mt={"32px"}>
              Especialidade
            </FormLabel>
            <Input
              width={["100%"]}
              height={["40px"]}
              name="specialty"
              type="text"
              placeholder="Especialidade"
            />
          </Flex>
        )}

        <Button
          isLoading={isLoading}
          variant="solid"
          mt="40px"
          width={["100%"]}
          height={["40px"]}
          type="submit"
        >
          Registrar
        </Button>
      </FormControl>
    </Flex>
  );
}

export default Register;
