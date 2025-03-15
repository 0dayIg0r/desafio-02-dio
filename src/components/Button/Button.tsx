import { Button } from "@chakra-ui/react";

function ButtonComponent({ onClick, label }: { onClick: () => void, label: string }) {
  return (
    <Button
      colorScheme="teal"
      size="md"
      width="100%"
      marginTop="10px"
      onClick={onClick}
    >
      {label}
    </Button>
  );
}

export default ButtonComponent;
