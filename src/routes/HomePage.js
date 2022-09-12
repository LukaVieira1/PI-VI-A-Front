import MedicCard from "../components/MedicCard";
import { Flex, Text, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getMedics } from "../services/medics";
import { useNavigate } from "react-router-dom";

function PublicPage() {
  const [medics, setMedics] = useState([]);
  const navigate = useNavigate();

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
    <Flex mt={"20"} alignItems={"center"} flexDirection="column">
      <Button
        colorScheme="blue"
        onClick={() => navigate("/my-page", { replace: true })}
      >
        Minha pagina
      </Button>
      <Text mt={"20px"}>Listagem de medicos</Text>
      <Flex flexDirection={"column"} gap="10px" mt={"10px"} maxW="250px">
        {medics.map((medic) => (
          <MedicCard
            name={medic?.name}
            specialitie={medic?.specialty}
            crm={medic?.crm}
          />
        ))}
      </Flex>
    </Flex>
  );
}

export default PublicPage;
