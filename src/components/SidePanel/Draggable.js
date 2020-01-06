import React from "react";

const Draggable = props => {
  const drag = e => {
    const target = e.target;
    e.dataTransfer.setData("transfer", target.id);
    //console.log((e.target.parentElement.parentElement.style.display = "none"));

    setTimeout(() => {
      target.style.display = "none";
    }, 0);
  };
  const dragOver = e => {
    //e.stopPropagation();
  };
  const drop = e => {
    e.target.style.display = "block";
  };

  return (
    <div
      id={props.id}
      draggable={props.draggable}
      onDragStart={drag}
      onDragOver={dragOver}
      onDragEnd={drop}
      className={props.className}
    >
      {props.children}
    </div>
  );
};

export default Draggable;
