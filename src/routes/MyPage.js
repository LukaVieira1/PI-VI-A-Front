import MedicCard from "../components/MedicCard";
import ScheduleCard from "../components/ScheduleCard";
import {
  Flex,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
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
import { getSchedules, schedule } from "../services/schedules";
import { useAuth } from "../context/auth-context";

function PublicPage() {
  const [medics, setMedics] = useState([]);
  const [schedules, setSchedules] = useState([]);
  const [medicCrm, setMedicCrm] = useState("");
  const [trigger, setTrigger] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  let auth = useAuth();

  const handleSchedule = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const date = formData.get("date");
    const observation = formData.get("observation");
    const data = {
      date,
      observation,
      medicCrm,
      pacientCpf: auth.user.cpf,
      status: "Agendado",
    };

    try {
      const request = async () => {
        const response = await schedule(data);
        onClose();
        setTrigger(!trigger);
        return response;
      };
      request();
    } catch (error) {}
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

  useEffect(() => {
    try {
      const request = async () => {
        const response = await getSchedules();

        setSchedules(response.data);
      };
      request();
    } catch (error) {}
  }, [trigger]);

  return (
    <Flex
      mt={"20"}
      alignItems={"start"}
      justifyContent={"space-evenly"}
      flexDirection="row"
    >
      <Flex alignItems={"center"} flexDirection="column">
        <Text>Selecione um medico para agendar uma consulta</Text>
        <Flex flexDirection={"column"} gap="10px" mt={"10px"} maxW="250px">
          {medics.map((medic) => (
            <button
              onClick={() => {
                onOpen();
                setMedicCrm(medic.crm);
              }}
            >
              <MedicCard
                name={medic?.name}
                specialitie={medic?.specialty}
                crm={medic?.crm}
              />
              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent p={"20px"}>
                  <ModalCloseButton />
                  <FormControl
                    as={"form"}
                    onSubmit={handleSchedule}
                    mt={["32px"]}
                  >
                    <ModalHeader>Agendamento com {medic?.name}</ModalHeader>
                    <ModalBody mb={"25px"}>
                      <Flex justify={["space-between"]}>
                        <FormLabel mt="32px" htmlFor="observation">
                          Observação
                        </FormLabel>
                      </Flex>
                      <InputGroup>
                        <Input
                          name="observation"
                          type="text"
                          placeholder="Observação"
                        />
                      </InputGroup>
                      <Flex justify={["space-between"]}>
                        <FormLabel mt="32px" htmlFor="date">
                          Data
                        </FormLabel>
                      </Flex>
                      <InputGroup>
                        <Input
                          name="date"
                          type="text"
                          placeholder="DD/MM/YYYY"
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
      <Flex alignItems={"center"} flexDirection="column">
        <Text> Suas Consultas agendadas:</Text>
        {schedules.map((schedule) => (
          <ScheduleCard
            id={schedule.id}
            date={schedule.date}
            observation={schedule.observation}
            medic={schedule.medic?.name}
            patient={schedule.pacient?.name}
            status={schedule.status}
            secretary={schedule.secretaryId}
          />
        ))}
      </Flex>
    </Flex>
  );
}

export default PublicPage;
