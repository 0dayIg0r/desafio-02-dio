import {
  Center,
  ChakraProvider,
  Input,
  Box,
  Button,
  Text,
} from "@chakra-ui/react";
import { login } from "./services/login";
import { Header } from "./components/Header/Header";
import ButtonComponent from "./components/Button/Button";
import { Card } from "./components/Card";

function App() {
  return (
    <ChakraProvider>
      <Header />
      <Box minHeight="100vh" backgroundColor="#9413dc" padding="25px">
        <Box backgroundColor="#FFFFFF" borderRadius="25px" padding="15px">
          <Center>
            <Text fontSize="2xl" paddingBottom="10px" fontWeight="bold">
              Faça o login
            </Text>
          </Center>
          <Card/>
          <Center></Center>
          <ButtonComponent onClick={login} label="Entrar" />
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
