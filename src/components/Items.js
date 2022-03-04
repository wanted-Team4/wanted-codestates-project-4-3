import styled from "styled-components";
import { useDragAndDrop } from "../hooks/useDragAndDrop";
import { useRecoilState } from "recoil";
import { fontSizeAtom } from "../atom";

const Optionsli = styled.li`
  cursor: pointer;
  font-size: ${(props) => props.fontSize};
  list-style: none;
  border-bottom: 1px solid #ccc;
  padding: 5px;
  display: flex;
  align-items: center;
  height: 25px;
  line-height: 14px;
`;
const Emoji = styled.div`
  margin-right: 5px;
  font-size: ${(props) => props.fontSize}px;
`;
const Text = styled.p`
  font-size: ${(props) => props.fontSize}px;
`;

const Items = ({ list, setList }) => {
  const { handleDragStart, onDragEnter } = useDragAndDrop({
    list,
    setList,
  });

  const [fontSize] = useRecoilState(fontSizeAtom);
  console.log(">>", fontSize);

  return (
    <>
      {list.map((item, idx) => (
        <Optionsli
          key={item.id}
          draggable
          onDragStart={(e) => {
            handleDragStart(e, idx);
          }}
          onDragOver={(e) => e.preventDefault()}
          onDragEnter={(e) => onDragEnter(e, idx)}
        >
          <Emoji fontSize={fontSize}>{item.emoji}</Emoji>
          <Text fontSize={fontSize}>{item.name}</Text>
        </Optionsli>
      ))}
    </>
  );
};

export default Items;
