import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosNotificationsOutline } from "react-icons/io";
import { apiEndpoints } from "../../config/ApiEndpoints";
import { useAuth } from "../../contexts/AuthContext";
import "./ParcelCard.css";

export default function ParcelCard() {
  const [parcelData, setParcelData] = useState([]);
  const navigate = useNavigate();
  const user = useAuth();

  useEffect(() => {
    if (!!user?.token && !!user?.id) {
      const headers = {Authorization: `Bearer ${user.token}`};
      const url = `${apiEndpoints.USER_INFO}/user/${user.id}`;

      fetch(url, { headers })
        .then((response) => {
          if (!response.ok) {
            console.log(response.json());
          }
          return response.json();
        })
        .then((data) => setParcelData(data.parcels))
        .catch((err) => {
          console.log(err.message);
        });
    } else {
      navigate("/alchemists/login");
    }
  }, [user, navigate]);

  return (
    <>
      <div className="card-container">
        <h3>PARCEL LIST</h3>
        {Object.values(parcelData).map((value, index) => {
          return (
            <div
              className="cards"
              onClick={() =>
                navigate(`/alchemists/userId/${user.id}/list/${index}`, { state: value })
              }
              key={index}
            >
              <div className="card-left">
                <div className="card-items">
                  Sender name:
                  <div className="parcel-value">{value.sender.username}</div>
                </div>
              </div>
              <div className="card-middle">
                <div className="card-items">
                  parcel recipient:
                  <div className="parcel-value">{value.recipient.username}</div>
                </div>
              </div>
              <div className="card-right">
                <div className="card-items">
                  Parcel status:
                  <div className="parcel-value">{value.status}</div>
                </div>
              </div>
              {value.status === "READY_FOR_PICKUP" && (
                <div className="status-notification">
                  <IoIosNotificationsOutline />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
