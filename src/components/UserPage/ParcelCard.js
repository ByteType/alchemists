import "./ParcelCard.css";
import { useNavigate, Link } from "react-router-dom";

export default function ParcelCard() {
  const navigate = useNavigate();
  return (
    <>
      <div className="card-container">
        <div
          className="cards"
          onClick={() => navigate("/alchemists/user/list/1")}
        >
          <div className="card-left">
            <div className="card-items">
              Sender name:<div className="parcel-value">value</div>
            </div>
          </div>
          <div className="card-middle">
            <div className="card-items">
              parcel recipient:<div className="parcel-value">value</div>
            </div>
          </div>
          <div className="card-right">
            <div className="card-items">
              Parcel status:<div className="parcel-value">value</div>
            </div>
          </div>
        </div>
        <div className="cards">
          <div className="card-left">
            <div className="card-items">
              Sender name:<div className="parcel-value">value</div>
            </div>
          </div>
          <div className="card-middle">
            <div className="card-items">
              parcel recipient:<div className="parcel-value">value</div>
            </div>
          </div>
          <div className="card-right">
            <div className="card-items">
              Parcel status:<div className="parcel-value">value</div>
            </div>
          </div>
        </div>
        <div className="cards">
          <div className="card-left">
            <div className="card-items">
              Sender name:<div className="parcel-value">value</div>
            </div>
          </div>
          <div className="card-middle">
            <div className="card-items">
              parcel recipient:<div className="parcel-value">value</div>
            </div>
          </div>
          <div className="card-right">
            <div className="card-items">
              Parcel status:<div className="parcel-value">value</div>
            </div>
          </div>
        </div>
        <div className="cards">
          <div className="card-left">
            <div className="card-items">
              Sender name:<div className="parcel-value">value</div>
            </div>
          </div>
          <div className="card-middle">
            <div className="card-items">
              parcel recipient:<div className="parcel-value">value</div>
            </div>
          </div>
          <div className="card-right">
            <div className="card-items">
              Parcel status:<div className="parcel-value">value</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
