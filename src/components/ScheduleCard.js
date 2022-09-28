import { Flex, Box, Text, Button } from "@chakra-ui/react";

const ScheduleCard = (props) => {
  const {
    date,
    medic,
    patient,
    status,
    secretary,
    observation,
    id,
    handleCancelSchedule,
  } = props;

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
        <Button
          mt={"10px"}
          bg={"red"}
          onClick={() => {
            handleCancelSchedule(id);
          }}
        >
          Cancelar consulta
        </Button>
      </Box>
    </Flex>
  );
};

export default ScheduleCard;
