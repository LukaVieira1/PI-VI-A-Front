import { Flex, Box, Text, Button } from "@chakra-ui/react";

import { updateSchedules } from "../services/schedules";

const ScheduleCard = (props) => {
  const { date, medic, patient, status, secretary, observation, id } = props;

  const cancelSchedule = () => {
    const data = {
      status: "Cancelado",
    };
    try {
      const request = async () => {
        const response = await updateSchedules(id, data);

        return response;
      };
      request();
    } catch (error) {}
  };
  return (
    <Flex
      mt={"10px"}
      border={"1px"}
      borderColor="gray.300"
      rounded={"md"}
      p="10px"
      w={"100%"}
    >
      <Box ml="3">
        <Text fontWeight="bold">Dados da consulta</Text>
        <Text fontSize="sm">data: {date}</Text>
        {medic && <Text fontSize="sm">Medico: {medic}</Text>}
        {patient && <Text fontSize="sm">Paciente: {patient}</Text>}
        <Text fontSize="sm">Status: {status}</Text>
        <Text fontSize="sm">Observação: {observation}</Text>
        {secretary && <Text fontSize="sm">Marcado por secretario (a)</Text>}
        <Button mt={"10px"} bg={"red"} onClick={cancelSchedule}>
          Cancelar consulta
        </Button>
      </Box>
    </Flex>
  );
};

export default ScheduleCard;
