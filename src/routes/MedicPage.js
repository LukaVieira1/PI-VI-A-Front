import ScheduleCard from "../components/ScheduleCard";
import { Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getSchedules } from "../services/schedules";
import { updateSchedules } from "../services/schedules";

function MedicPage() {
  const [schedules, setSchedules] = useState([]);
  const [trigger, setTrigger] = useState(false);

  const handleCancelSchedule = (id) => {
    const data = {
      status: "Cancelado",
    };
    try {
      const request = async () => {
        const response = await updateSchedules(id, data);
        setTrigger(!trigger);
        return response;
      };
      request();
    } catch (error) {}
  };

  useEffect(() => {
    try {
    } catch (error) {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //Busca as consultas e armazena em um estado na primeira renderizaçao da pagina
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
            handleCancelSchedule={handleCancelSchedule}
          />
        ))}
      </Flex>
    </Flex>
  );
}

export default MedicPage;
