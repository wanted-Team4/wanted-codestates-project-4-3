import { useEffect, useRef } from 'react';

export const useDragAndDrop = ({ list, setList }) => {
    const startContainer = useRef();
    const draggingItem = useRef();
    const dragOverItem = useRef();

    const handleDragStart = (e, position) => {
        draggingItem.current = position;
        startContainer.current = true;
        if (e.dataTransfer.effectedAllowed = 'move') {
            e.target.style.backgroundColor = '#FFEDED';
        }
    };

    const onDragEnter = (e, position) => {
        if (!startContainer.current) {
            return;
        }
        handleDragEnter(e, position);
    };

    const handleDragEnter = (e, position) => {
        dragOverItem.current = position;
        const listCopy = [...list];
        const draggingItemContent = listCopy[dragOverItem.current];
        listCopy.splice(dragOverItem.current, 1);
        listCopy.splice(draggingItem.current, 0, draggingItemContent);
        draggingItem.current = dragOverItem.current;
        dragOverItem.current = null;
        setList(listCopy);

        if (e.dataTransfer.effectedAllowed = 'move') {
            e.target.style.backgroundColor = 'white';
        }
    };

    useEffect(() => {
        startContainer.current = false;
    }, []);

    return {
        handleDragStart,
        onDragEnter,
    };
};