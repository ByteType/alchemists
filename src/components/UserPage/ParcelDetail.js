import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { CodeTitles } from "../../enum/CodeTitle";
import "./ParcelDetail.css";

export default function ParcelDetail({ user }) {
  const parcel = useLocation().state;
  const token = localStorage.getItem("token");
  const [parcelData, setParcelData] = useState({});
  const [codeTitle, setCodeTitle] = useState("");
  const [code, setCode] = useState("");

  useEffect(() => {
    if (!parcel || !parcel.id || !token) {
      console.log("Missing parcel ID or token.");
      return;
    }

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };

    const url = `https://bytetype-cea685bb8e38.herokuapp.com/api/parcels/${parcel.id}`;
    fetch(url, { method: "GET", headers })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setParcelData(data))
      .catch((err) => {
        console.error("Error fetching parcel data:", err.message);
      });
  }, [parcel, token]);

  useEffect(() => {
    if (user.id === parcel.sender?.id) {
      setCodeTitle(CodeTitles.DeliveryCode);
      setCode(parcelData.deliveryCode);
    } else if (parcel) {
      setCodeTitle(CodeTitles.PickUpCode);
      setCode(parcelData.pickupCode);
    }
  }, [parcel, user, parcelData]);

  return (
    <form className="detail-form">
      <div className="form-top">
        <div className="top-left">
          <div className="form-row">
            <div className="info-title">Sender name </div>
            <span>{parcelData.sender?.username}</span>
          </div>
          <div className="form-row">
            <div className="info-title">Sender tel </div>
            <span>{parcelData.sender?.phone}</span>
          </div>
          <div className="form-row">
            <div className="info-title">Sender address</div>
            <span>{parcelData.sender?.address}</span>
          </div>
          <div className="form-row">
            <div className="info-title">Locker for pickup</div>
            <span>{parcelData.pickedUpAt}</span>
          </div>
          <div className="form-row">
            <div className="info-title">{codeTitle}</div>
            <span>{code}</span>
          </div>
        </div>
        <div className="top-right">
          <div className="form-row">
            <div className="info-title">Recipient name </div>
            <span>{parcelData.recipient?.username}</span>
          </div>
          <div className="form-row">
            <div className="info-title">Recipient tel </div>
            <span>{parcelData.recipient?.phone}</span>
          </div>
          <div className="form-row">
            <div className="info-title">Recipient address</div>
            <span>{parcelData.recipient?.address}</span>
          </div>
          <div className="form-row">
            <div className="info-title">Time for pickup</div>
            <span>{parcelData.readyForPickupAt}</span>
          </div>
          <div className="form-row">
            <div className="info-title">Picked up time</div>
            <span>{parcelData.pickedUpAt}</span>
          </div>
        </div>
      </div>
    </form>
  );
}
