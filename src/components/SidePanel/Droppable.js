import React from "react";

const Droppable = props => {
  const drop = e => {
    e.persist();
    e.preventDefault();

    const data = e.dataTransfer.getData("transfer");
    const element = document.getElementById(data);
    let parent = e.target;
    while (parent.parentNode.className !== "eyzy-tree eyzy-theme") {
      parent = parent.parentNode;
      console.log(parent);
    }
    console.log(
      "data:",
      data,
      " element;",
      element,
      "Target : ",
      parent.childNodes[0].innerText
    );
    //e.target.appendChild(element);
  };
  const allowDrop = e => {
    e.preventDefault();
  };

  return (
    <div
      id={props.id}
      onDrop={drop}
      onDragOver={allowDrop}
      className={props.className}
    >
      {props.children}
    </div>
  );
};

export default Droppable;
