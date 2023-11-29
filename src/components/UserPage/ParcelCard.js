import { useEffect, useState } from "react";
import "./ParcelCard.css";
import { useNavigate } from "react-router-dom";

export default function ParcelCard({ user }) {
  const token = localStorage.getItem("token");
  const [parcelData, setParcelData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const headers = { Authorization: `Bearer ${token}` };
    const url = `https://bytetype-cea685bb8e38.herokuapp.com/api/user/${user.id}`;
    fetch(url, { headers })
      .then((response) => response.json())
      .then((data) => setParcelData(data.parcels))
      .catch((err) => {
        console.log(err.message);
      });
  }, [user.id, token]);

  console.log(parcelData);

  return (
    <>
      <div className="card-container">
        {Object.values(parcelData).map((value, index) => {
          return (
            <div
              className="cards"
              onClick={() =>
                navigate(`/alchemists/userId/${user.id}/list/${index}`, {
                  state: value,
                })
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
            </div>
          );
        })}
      </div>
    </>
  );
}
