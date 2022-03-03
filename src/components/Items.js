import styled from "styled-components";
import { useDragAndDrop } from "../hooks/useDragAndDrop";

const Optionsli = styled.li`
  cursor: pointer;
  font-size: 14px;
  list-style: none;
  border-top: 1px solid #ccc;
  padding: 5px;
`;

const Items = ({ list, setList }) => {

    const { handleDragStart, onDragEnter } = useDragAndDrop({
        list,
        setList,
    });

    return (
        < >
            {
                list.map((item, idx) => (
                    <Optionsli
                        key={item.id}
                        draggable
                        onDragStart={(e) => {
                            handleDragStart(e, idx);
                        }}
                        onDragOver={(e) => e.preventDefault()}
                        onDragEnter={(e) => onDragEnter(e, idx)}
                    >
                        {item.emoji}
                        {item.name}
                    </Optionsli>
                ))};
        </>
    );
}

export default Items;