"use client";
import { useDraggable } from "@neodrag/react";
import React, { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
};

function Drag({ children }: Props) {
  const draggableRef = useRef(null);

  const { isDragging, dragState } = useDraggable(draggableRef, {
    axis: "both",
  });

  useEffect(() => {}, [isDragging, dragState]);

  return <div ref={draggableRef}>{children}</div>;
}

export default Drag;
