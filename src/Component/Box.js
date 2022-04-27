import React from "react";

const Box = ({ board, onClickBox }) => {
  return (
    <div className="chessboard">
      {board?.map((box, id) => {
        return (
          <span
            key={id}
            className={`${box}-box`}
            onClick={() => onClickBox(id)}
          />
        );
      })}
    </div>
  );
};

export default Box;
