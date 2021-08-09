import React from "react";

export default function Winner() {
  return (
    <div>
      <h1>
        {localStorage.getItem("rand") === localStorage.getItem("selected")
          ? console.log("you won money")
          : console.log("you lose the game")}
      </h1>
    </div>
  );
}
