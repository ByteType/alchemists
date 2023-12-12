import React, { useState } from "react";
import LockerPicker from "./LockerPicker";
import { apiEndpoints } from "../../config/ApiEndpoints";
import { useAuth } from "../../contexts/AuthContext";
import "./DeliveryForm.css";

export default function DeliveryForm() {
  const user = useAuth();
  const [parcelData, setParcelData] = useState({
    sender: { username: "", phone: "", address: "" },
    recipient: { username: "", phone: "", address: "" },
    width: "",
    height: "",
    depth: "",
    mass: "",
    expectedSenderLockers: [],
    expectedRecipientLockers: [],
  });

  function handleChange(event) {
    const { name, value } = event.target;

    if (
      name === "expectedSenderLockers" ||
      name === "expectedRecipientLockers"
    ) {
      setParcelData({ ...parcelData, [name]: value ? [value] : [] });
    } else {
      setParcelData({ ...parcelData, [name]: value });
    }
  }

  function handleSenderChange(event) {
    const { name, value } = event.target;
    setParcelData((prevState) => ({
      ...prevState,
      sender: {
        ...prevState.sender,
        [name]: value,
      },
    }));
  }

  function handleRecipientChange(event) {
    const { name, value } = event.target;
    setParcelData((prevState) => ({
      ...prevState,
      recipient: {
        ...prevState.recipient,
        [name]: value,
      },
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const payload = {
      sender: parcelData.sender,
      recipient: parcelData.recipient,
      width: parseFloat(parcelData.width),
      height: parseFloat(parcelData.height),
      depth: parseFloat(parcelData.depth),
      mass: parseFloat(parcelData.mass),
      expectedSenderLockers: parcelData.expectedSenderLockers,
      expectedRecipientLockers: parcelData.expectedRecipientLockers,
    };

    try {
      const response = await fetch(apiEndpoints.CREATE_DELIVERY, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`
        },
        body: JSON.stringify(payload),
      });
      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
        alert("Delivery successful!");
      } else {
        console.log(response.json());
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  function handleLockerChange(lockerValue, lockerName) {
    setParcelData({ ...parcelData, [lockerName]: [lockerValue] });
  }

  return (
    <>
      <h3 className="delivery-form-title">DELIVERY PARCEL</h3>
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
          <LockerPicker
            className="locker-select"
            label="Choose a parcel locker for delivery"
            onLockerChange={handleLockerChange}
            name="expectedSenderLockers"
            value={parcelData.expectedSenderLockers[0]}
          />
          <br />
          <LockerPicker
            className="locker-select"
            label="Choose a parcel locker for Pickup"
            onLockerChange={handleLockerChange}
            name="expectedRecipientLockers"
            value={parcelData.expectedRecipientLockers[0]}
          />
        </div>
        <div className="btn-box">
          <button type="submit" className="form-btn">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
