import { Box, Container, Image } from "@chakra-ui/react";
import "./style/style.css";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Background from "/demon.jpeg";
import { Routers } from "./router/reuter";

function App() {
  const location = useLocation();

  useEffect(() => {
    document.documentElement.scrollTo({ top: 0 });
  }, [location.pathname]);

  return (
    <Box bg="black">
      <Image
        src={Background}
        position="absolute"
        h="100vh"
        objectFit="cover"
        zIndex="1"
        w="100%"
      />
      <Box
        w="100%"
        zIndex="1"
        position="absolute"
        h="100vh"
        bgGradient="linear(to-t, rgb(0,0,0), rgba(0,0,0,0.2))"
      ></Box>
      <Container
        maxW="1000px"
        pt={{ md: "20px" }}
        px={{ md: "16px" }}
        m="0 auto"
        minH="100vh"
        position="relative"
        zIndex="2"
      >
        <Routers />
      </Container>
    </Box>
  );
}

export default App;
