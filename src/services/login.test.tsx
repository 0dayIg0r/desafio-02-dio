import { login } from "./login";

describe("login", () => {
  const mockAlert = jest.fn();
  window.alert = mockAlert;
  const mockEmail = "teste@teste.com";

  it("Deve exibir um alert com boas vindas", async () => {
    await login(mockEmail);
    expect(mockAlert).toHaveBeenCalledWith(`Bem vindo ${mockEmail}`);
  });

  it("Não deve exibir a mensagemde boas vindas sem o e-mail", () => {
    login(mockEmail);
    expect(mockAlert).not.toHaveBeenCalledWith(`Bem vindo`);
  });

  it("Deve exibir um erro, caso e-mail seja invalido", async () => {
    await login("email@email.com");
    expect(mockAlert).toHaveBeenCalledWith("E-mail inválido");
  });
});
