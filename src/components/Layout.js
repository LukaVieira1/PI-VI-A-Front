import { Outlet } from "react-router-dom";
import { Flex, Heading } from "@chakra-ui/react";
import AuthStatus from "./AuthStatus";

function Layout() {
  return (
    <>
      <Heading
        maxW="100%"
        padding="0 20px 10px"
        textAlign="center"
        backgroundColor="#f0f0f0"
        textColor="white"
        mb={"10px"}
      >
        <Flex justify="center" py={"30px"} textColor={"black"}>
          MedSystem
        </Flex>
      </Heading>
      <AuthStatus />
      <Outlet />
    </>
  );
}

export default Layout;
