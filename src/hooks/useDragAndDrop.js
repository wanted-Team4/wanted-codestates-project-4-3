import { useState, useEffect, useRef } from "react";

export const useDragAndDrop = ({ list, setList }) => {
  const startContainer = useRef();
  const draggingItem = useRef();
  const dragOverItem = useRef();

  const handleDragStart = (e, idx) => {
    draggingItem.current = idx;
    startContainer.current = true;
    if ((e.dataTransfer.effectedAllowed = "move")) {
      e.target.style.backgroundColor = "#FFEDED";
    }
  };

  const onDragEnter = (e, idx) => {
    if (!startContainer.current) {
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
    startContainer.current = false;
  }, []);

  return {
    handleDragStart,
    onDragEnter,
  };
};
