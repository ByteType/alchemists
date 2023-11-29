import React, { useState } from "react";
import "./DeliveryForm.css";

export default function DeliveryForm() {
  const [parcelData, setParcelData] = useState({
    sender: { username: "", phone: "", address: "" },
    recipient: { username: "", phone: "", address: "" },
    width: "",
    height: "",
    depth: "",
    mass: "",
    lockerId: [],
  });

  const handleChange = (event) => {
    setParcelData({ ...parcelData, [event.target.name]: event.target.value });
  };
  const handleSenderChange = (event) => {
    const { name, value } = event.target;
    setParcelData((prevState) => ({
      ...prevState,
      sender: {
        ...prevState.sender,
        [name]: value,
      },
    }));
  };
  const handleRecipientChange = (event) => {
    const { name, value } = event.target;
    setParcelData((prevState) => ({
      ...prevState,
      recipient: {
        ...prevState.recipient,
        [name]: value,
      },
    }));
  };

  console.log(JSON.stringify(parcelData));
  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token");

    const payload = {
      sender: parcelData.sender,
      recipient: parcelData.recipient,
      width: parseFloat(parcelData.width),
      height: parseFloat(parcelData.height),
      depth: parseFloat(parcelData.depth),
      mass: parseFloat(parcelData.mass),
      lockerId: [parcelData.lockerId],
    };

    try {
      const response = await fetch(
        "https://bytetype-cea685bb8e38.herokuapp.com/api/parcels",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(payload),
        }
      );
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Network response was not ok: ${errorText}`);
      }
      const responseData = await response.json();
      console.log(responseData);
      alert("Delivery successful!");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form className="delivery-form" onSubmit={handleSubmit}>
      <div className="form-top">
        <div className="top-left">
          <div className="form-row">
            <label htmlFor="senderName">Sender name </label>
            <input
              type="text"
              id="senderName"
              name="username"
              onChange={handleSenderChange}
              value={parcelData.sender.username}
            />
          </div>
          <div className="form-row">
            <label htmlFor="senderPhone">Sender tel </label>
            <input
              type="tel"
              id="senderPhone"
              name="phone"
              onChange={handleSenderChange}
              value={parcelData.sender.phone}
            />
          </div>
          <div className="form-row">
            <label htmlFor="senderAddress">Sender address</label>
            <input
              type="text"
              id="senderAddress"
              name="address"
              onChange={handleSenderChange}
              value={parcelData.sender.address}
            />
          </div>
        </div>
        <div className="top-right">
          <div className="form-row">
            <label htmlFor="recipientName">Recipient name </label>
            <input
              type="text"
              id="recipientName"
              name="username"
              onChange={handleRecipientChange}
              value={parcelData.recipient.username}
            />
          </div>
          <div className="form-row">
            <label htmlFor="recipientPhone">Recipient tel </label>
            <input
              type="tel"
              id="recipientPhone"
              name="phone"
              onChange={handleRecipientChange}
              value={parcelData.recipient.phone}
            />
          </div>
          <div className="form-row">
            <label htmlFor="recipientAddress">Recipient address</label>
            <input
              type="text"
              id="recipientAddress"
              name="address"
              onChange={handleRecipientChange}
              value={parcelData.recipient.address}
            />
          </div>
        </div>
      </div>
      <div className="form-bottom">
        <input
          type="number"
          className="length"
          name="depth"
          placeholder="Length(cm)"
          onChange={handleChange}
          value={parcelData.depth}
        />{" "}
        x&nbsp;
        <input
          type="number"
          className="width"
          name="width"
          placeholder="Width(cm)"
          onChange={handleChange}
          value={parcelData.width}
        />{" "}
        x&nbsp;
        <input
          type="number"
          className="height"
          name="height"
          placeholder="Height(cm)"
          onChange={handleChange}
          value={parcelData.height}
        />
        <input
          type="number"
          className="mass"
          name="mass"
          placeholder="Mass(kg)"
          min="0"
          step="0.01"
          onChange={handleChange}
          value={parcelData.mass}
        />
        <br />
        <label className="locker-select">
          <span>Select a parcel locker: </span>
          <select
            name="lockerId"
            onChange={handleChange}
            value={parcelData.lockerId}
          >
            <option value="locker1">locker1</option>
            <option value="locker2">locker2</option>
            <option value="locker3">locker3</option>
            <option value="locker4">locker4</option>
            <option value="locker5">locker5</option>
          </select>
        </label>
      </div>
      <div className="btn-box">
        <button type="submit" className="form-btn">
          Submit
        </button>
      </div>
    </form>
  );
}
