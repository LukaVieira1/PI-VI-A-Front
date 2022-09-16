import ScheduleCard from "../components/ScheduleCard";
import { Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getSchedules } from "../services/schedules";

function MedicPage() {
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    try {
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
  }, []);

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
          />
        ))}
      </Flex>
    </Flex>
  );
}

export default MedicPage;
