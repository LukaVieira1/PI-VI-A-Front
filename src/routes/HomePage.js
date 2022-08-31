import MedicCard from "../components/MedicCard";
import { Flex, Text } from "@chakra-ui/react";

const medics = [
  { name: "Dr. Adeboye", specialitie: "Clinico Geral" },
  { name: "Dr. Robert", specialitie: "Cirurgiao" },
  { name: "Dr. Adalberto", specialitie: "Ginecologista" },
  { name: "Dr. Maria", specialitie: "Clinico Geral" },
  { name: "Dr. Jose", specialitie: "Clinico Geral" },
];

function PublicPage() {
  return (
    <Flex alignItems={"center"} flexDirection="column">
      <Text mt={"20px"}>Listagem de medicos</Text>
      <Flex flexDirection={"column"} gap="10px" mt={"10px"} maxW="250px">
        {medics.map((medic) => (
          <MedicCard name={medic?.name} specialitie={medic?.specialitie} />
        ))}
      </Flex>
    </Flex>
  );
}

export default PublicPage;
