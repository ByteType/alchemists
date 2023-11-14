import { useState } from "react";
import "./DeliveryForm.css";

export default function DeliveryForm() {
  return (
    <form className="delivery-form">
      <div className="form-top">
        <div className="top-left">
          <div className="form-row">
            <label htmlFor="senderName">Sender name </label>
            <input type="text" id="senderName" name="senderName" />
          </div>
          <div className="form-row">
            <label htmlFor="senderPhone">Sender tel </label>
            <input type="tel" id="senderPhone" name="senderPhone" />
          </div>
          <div className="form-row">
            <label htmlFor="senderAddress">Sender address</label>
            <input type="text" id="senderAddress" name="senderAddress" />
          </div>
        </div>
        <div className="top-right">
          <div className="form-row">
            <label htmlFor="recipientName">Recipient name </label>
            <input type="text" id="recipientName" name="recipientName" />
          </div>
          <div className="form-row">
            <label htmlFor="recipientPhone">Recipient tel </label>
            <input type="tel" id="recipientPhone" name="recipientPhone" />
          </div>
          <div className="form-row">
            <label htmlFor="recipientAddress">Recipient address</label>
            <input type="text" id="recipientAddress" name="recipientAddress" />
          </div>
        </div>
      </div>
      <div className="form-bottom">
        <input type="number" className="length" placeholder="Length(cm)" />{" "}
        x&nbsp;
        <input type="number" className="width" placeholder="Width(cm)" />{" "}
        x&nbsp;
        <input type="number" className="height" placeholder="Height(cm)" />
        <input
          type="number"
          className="mass"
          placeholder="Mass(kg)"
          min="0"
          step="0.01"
        />
        <br />
        <label className="locker-select">
          <span>Select a parcel locker: </span>
          <select>
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
