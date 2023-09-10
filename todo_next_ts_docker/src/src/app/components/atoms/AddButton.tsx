import { Button } from "@chakra-ui/react";
import { FC } from "react";

// type Props = {
//   onClick: () => void;
// };

// const AddButton: FC<Props> = (props) => {
const AddButton = () => {
  // const { onClick } = props;

  return (
    <>
      <Button
        // onClick={() => alert("クリックされました")}
        colorScheme="whatsapp"
        ml="10px"
      >
        追加
      </Button>
    </>
  );
};

export default AddButton;
