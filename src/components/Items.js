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
`
const Text = styled.p`
`

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
                        <Emoji>{item.emoji}</Emoji>
                        <Text>{item.name}</Text>
                    </Optionsli>
                ))};
        </>
    );
}

export default Items;