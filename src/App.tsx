import { useState } from "react";
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
  const [value, setValue] = useState(0);
  return (
    <ChakraProvider>
      <Header />
      <Card />
    </ChakraProvider>
  );
}

export default App;
