import MedicCard from "../components/MedicCard";
import {
  Flex,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getMedics } from "../services/medics";

function PublicPage() {
  const [medics, setMedics] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSchedule = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");
  };

  useEffect(() => {
    try {
      const request = async () => {
        const response = await getMedics();
        setMedics(response.data?.data?.users);
      };
      request();
    } catch (error) {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Flex
      mt={"20"}
      alignItems={"center"}
      justifyContent={"space-between"}
      flexDirection="row"
    >
      <Flex mt={"20"} alignItems={"center"} flexDirection="column">
        <Text mt={"20px"}>Selecione um medico para agendar uma consulta</Text>
        <Flex flexDirection={"column"} gap="10px" mt={"10px"} maxW="250px">
          {medics.map((medic) => (
            <button onClick={onOpen}>
              <MedicCard
                name={medic?.name}
                specialitie={medic?.specialty}
                crm={medic?.crm}
              />
              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                  <FormControl
                    as={"form"}
                    onSubmit={handleSchedule}
                    mt={["32px"]}
                  >
                    <ModalHeader>Agendamento com {medic?.name}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      <FormLabel htmlFor="email">Horario</FormLabel>
                      <Input name="email" type="email" placeholder="Email" />
                      <Flex justify={["space-between"]}>
                        <FormLabel mt="32px" htmlFor="senha">
                          Senha
                        </FormLabel>
                      </Flex>
                      <InputGroup>
                        <Input
                          name="password"
                          type="password"
                          placeholder="Senha"
                        />
                      </InputGroup>
                    </ModalBody>

                    <Button colorScheme="blue" type="submit" mr={3}>
                      Agendar
                    </Button>
                    <Button variant="ghost" onClick={onClose}>
                      Cancelar
                    </Button>
                  </FormControl>
                </ModalContent>
              </Modal>
            </button>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default PublicPage;
