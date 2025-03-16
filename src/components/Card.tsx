import { Input, Center, Text, Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ButtonComponent from "./Button/Button";
import { login } from "../services/login";
import { api } from "../services/api";

interface UserData {
  email: string,
  password: string,
  name: string
}

export const Card = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [userData, setUserData] = useState<null | UserData>();

  useEffect(() => {
    const getData = async () => {
      const data: UserData | any = await api;

      setUserData(data);
    };

    getData();
  }, []);

  return (
    <Box minHeight="100vh" backgroundColor="#9413dc" padding="25px">
      <Box backgroundColor="#FFFFFF" borderRadius="25px" padding="15px">
        <Center>
          <Text fontSize="2xl" paddingBottom="10px" fontWeight="bold">
            Faça o login
          </Text>
        </Center>
        <Input
          placeholder="email"
          marginBottom="15px"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input placeholder="password" type="password" value={password} />
        <ButtonComponent onClick={() => login(email)} label="Entrar" />
      </Box>
    </Box>
  );
};
