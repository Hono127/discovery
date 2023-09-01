import { Button } from "@chakra-ui/react";
import { FC, ReactNode, memo } from "react";

type Props = {
  children: ReactNode;
  disabled?: boolean;
  loading?: boolean;
  onClick: () => void;
};

const PrimaryButton: FC<Props> = memo((props) => {
  const { children, onClick, disabled = false, loading = false } = props;
  return (
    <Button
      colorScheme="teal"
      onClick={onClick}
      isDisabled={disabled || loading}
      isLoading={loading}
    >
      {children}
    </Button>
  );
});

export default PrimaryButton;
