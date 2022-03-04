import { useState, useEffect, useRef } from "react";

export const useDragAndDrop = ({ list, setList }) => {
    const [isDragging, setisDragging] = useState(false);
    const draggingItem = useRef();
    const dragOverItem = useRef();

    const handleDragStart = (e, idx) => {
        draggingItem.current = idx;
        setisDragging(true);
        if ((e.dataTransfer.effectedAllowed = "move")) {
            e.target.style.backgroundColor = "#FFEDED";
        }
    };

    const onDragEnter = (e, idx) => {
        if (!setisDragging) {
            return;
        }
        updateItems(e, idx);
    };

    const updateItems = (e, idx) => {
        dragOverItem.current = idx;
        const tempState = [...list];
        const movingItem = tempState[dragOverItem.current];
        tempState.splice(dragOverItem.current, 1);
        tempState.splice(draggingItem.current, 0, movingItem);
        draggingItem.current = dragOverItem.current;
        dragOverItem.current = "";
        setList(tempState);

        if ((e.dataTransfer.effectedAllowed = "move")) {
            e.target.style.backgroundColor = "white";
        }
    };

    useEffect(() => {
        setisDragging(false);
    }, []);

    return {
        handleDragStart,
        onDragEnter,
    };
};
