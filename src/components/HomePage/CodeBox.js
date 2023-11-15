import React, { useState, useRef } from "react";
import "./CodeBox.css";

export default function CodeBox() {
  const itemsRef = useRef([]);
  const [, setUserInput] = useState("");
  const [action, setAction] = useState("Pick Up Parcel");

  const codeChangeHandler = (event) => {
    const [, codeFieldIndex] = event.target.name.split("-");
    let fieldIntIndex = parseInt(codeFieldIndex, 10);
    setUserInput((prevState) => prevState + event.target.value);

    if (fieldIntIndex < 3) {
      itemsRef.current[fieldIntIndex + 1].focus();
    } else {
      const field = document.querySelector(`Input[name=code-${fieldIntIndex}]`);
      field.blur();
    }
  };
  const codeInputFields = new Array(4)
    .fill(0)
    .map((item, index) => (
      <input
        ref={(ref) => itemsRef.current.push(ref)}
        name={`code-${index}`}
        key={index}
        onChange={(event) => codeChangeHandler(event)}
        maxLength={1}
      />
    ));
  return (
    <div className="locker-container">
      <div className="locker">
        <h2>{action}</h2>
        <div className="code-box">{codeInputFields}</div>
        <label>
          <span>Select a parcel locker: </span>
          <select>
            <option value="locker1">locker1</option>
            <option value="locker2">locker2</option>
            <option value="locker3">locker3</option>
            <option value="locker4">locker4</option>
            <option value="locker5">locker5</option>
          </select>
        </label>
        <div className="locker-status">
          {action === "Pick Up Parcel" ? "For delivery? " : "For pick up? "}
          {action === "Pick Up Parcel" ? (
            <span
              onClick={() => {
                setAction("Delivery parcel");
              }}
            >
              Delivery now!
            </span>
          ) : (
            <span
              onClick={() => {
                setAction("Pick Up Parcel");
              }}
            >
              Pick up now!
            </span>
          )}
        </div>

        <div className="code-btn-box">
          <button className="code-btn">OK</button>
        </div>
      </div>
    </div>
  );
}
