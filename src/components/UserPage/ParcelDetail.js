import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { CodeTitles } from "../../enum/CodeTitle";
import { apiEndpoints } from "../../config/ApiEndpoints";
import { useAuth } from "../../contexts/AuthContext";
import "./ParcelDetail.css";

export default function ParcelDetail() {
  const parcel = useLocation().state;
  const [parcelData, setParcelData] = useState({});
  const [codeTitle, setCodeTitle] = useState("");
  const [code, setCode] = useState("");
  const navigate = useNavigate();
  const user = useAuth();

  useEffect(() => {
    const headers = { Authorization: `Bearer ${user.token}` };

    fetch(`${apiEndpoints.PARCEL_DETAIL}/parcels/${parcel.id}`, { headers })
      .then((response) => {
        if (!response.ok) {
          console.log(response.json());
        }
        return response.json();
      })
      .then((data) => setParcelData(data))
      .catch((err) => {
        console.error("Error fetching parcel data:", err.message);
      });
  }, [user, navigate, parcel]);

  useEffect(() => {
    if (user?.id === parcel.sender?.id) {
      setCodeTitle(CodeTitles.DeliveryCode);
      setCode(parcelData.deliveryCode);
    } else if (parcel) {
      setCodeTitle(CodeTitles.PickUpCode);
      setCode(parcelData.pickupCode);
    }
  }, [parcel, user, parcelData]);

  return (
    <>
      <button
        className="back-btn"
        onClick={() => navigate("/alchemists/user/list")}
      >
        <FaArrowLeft />
        &nbsp;back
      </button>
      <div className="detail-form">
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
              <span>{code ? code : "****"}</span>
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
      </div>
    </>
  );
}
