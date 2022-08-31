import { Flex, Avatar, Box, Text } from "@chakra-ui/react";

const MedicCard = (props) => {
  const { name, specialitie } = props;
  return (
    <Flex
      border={"1px"}
      borderColor="gray.300"
      rounded={"md"}
      p="10px"
      w={"100%"}
    >
      <Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Breezeicons-actions-22-im-user.svg/1200px-Breezeicons-actions-22-im-user.svg.png" />
      <Box ml="3">
        <Text fontWeight="bold">{name}</Text>
        <Text fontSize="sm">{specialitie}</Text>
      </Box>
    </Flex>
  );
};

export default MedicCard;
