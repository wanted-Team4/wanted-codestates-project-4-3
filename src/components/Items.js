import { useRef } from "react";
import styled from "styled-components";
import { useDragAndDrop } from "../hooks/useDragAndDrop";

const Optionsli = styled.li`
  cursor: pointer;
  font-size: 14px;
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
`;
const Text = styled.p``;

const Items = ({ list, setList, selectId, setSelectId }) => {
  const { handleDragStart, onDragEnter } = useDragAndDrop({
    list,
    setList,
  });
  const itemRefs = useRef([]);
  const selectItem = (e, id) => {
    // 선택된게 하나도 없으면 추가
    if (selectId.length === 0) {
      setSelectId([id]);
      itemRefs.current[id].style.backgroundColor = "#b5d8f0";
      return;
    } else {
      if (selectId.findIndex((item) => item === id)) return;
      // 있는 아이디면 삭제
      setSelectId((prev) => {
        const copy = prev.slice();
        copy.splice(
          selectId.findIndex((item) => item === id),
          1
        );

        itemRefs.current[id].style.backgroundColor = "";
        return copy;
      });
    }
  };

  return (
    <>
      {list.map((item, idx) => (
        <Optionsli
          key={item.id}
          ref={(elem) => (itemRefs.current[item.id] = elem)}
          draggable
          onDragStart={(e) => {
            handleDragStart(e, idx);
          }}
          onClick={(e) => selectItem(e, item.id)}
          onDragOver={(e) => e.preventDefault()}
          onDragEnter={(e) => onDragEnter(e, idx)}
        >
          <Emoji>{item.emoji}</Emoji>
          <Text>{item.name}</Text>
        </Optionsli>
      ))}
    </>
  );
};

export default Items;
