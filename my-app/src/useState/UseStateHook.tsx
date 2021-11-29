import React, { useState } from "react";

const UseStateHook = () => {
  const [name, setName] = useState("");

  const updateName = (event:React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <div>
      <h1>Your Name: {name}</h1>
      <form>
      <div className="pb-3">
        <input
          type="text"
          value={name}
          onChange={updateName}
          placeholder="Please enter your name"
        />
      </div>
      </form>
    </div>
  );
};

export default UseStateHook;
