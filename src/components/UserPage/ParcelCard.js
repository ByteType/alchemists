import "./ParcelCard.css";
import { useState } from "react";

export default function ParcelCard() {
  const [codeStatus, setCodeStatus] = useState(false);
  return (
    <>
      <div className="card-container">
        <div className="cards">
          <div className="card-left">
            <div className="card-items">
              Sender name:<div className="parcel-value">value</div>
            </div>

            <div className="card-items">
              Time for parcel pickup:<div className="parcel-value">value</div>
            </div>

            <div className="card-items">
              Parcel pickup time:<div className="parcel-value">value</div>
            </div>
          </div>
          <div className="card-middle">
            <div className="card-items">
              parcel recipient:<div className="parcel-value">value</div>
            </div>
            <div className="card-items">
              Locker for parcel pickup:<div className="parcel-value">value</div>
            </div>
          </div>
          <div className="card-right">
            <div className="card-items">
              Parcel status:<div className="parcel-value">value</div>
            </div>
            {codeStatus === false ? (
              <div className="card-items">
                Pickup code:<div className="parcel-value">value</div>
              </div>
            ) : (
              <div className="card-items">
                Delivery code:<div className="parcel-value">value</div>
              </div>
            )}
          </div>
        </div>

        <div className="cards">
          <div className="card-left">
            <div className="card-items">
              Sender name:<div className="parcel-value">value</div>
            </div>
            <div className="card-items">
              Time for parcel pickup:<div className="parcel-value">value</div>
            </div>
            <div className="card-items">
              Parcel pickup time:<div className="parcel-value">value</div>
            </div>
          </div>
          <div className="card-middle">
            <div className="card-items">
              parcel recipient:<div className="parcel-value">value</div>
            </div>
            <div className="card-items">
              Locker for parcel pickup:<div className="parcel-value">value</div>
            </div>
          </div>
          <div className="card-right">
            <div className="card-items">
              Parcel status:<div className="parcel-value">value</div>
            </div>
            {codeStatus === false ? (
              <div className="card-items">
                Pickup code:<div className="parcel-value">value</div>
              </div>
            ) : (
              <div className="card-items">
                Delivery code:<div className="parcel-value">value</div>
              </div>
            )}
          </div>
        </div>
        <div className="cards">
          <div className="card-left">
            <div className="card-items">
              Sender name:<div className="parcel-value">value</div>
            </div>
            <div className="card-items">
              Time for parcel pickup:<div className="parcel-value">value</div>
            </div>
            <div className="card-items">
              Parcel pickup time:<div className="parcel-value">value</div>
            </div>
          </div>
          <div className="card-middle">
            <div className="card-items">
              parcel recipient:<div className="parcel-value">value</div>
            </div>
            <div className="card-items">
              Locker for parcel pickup:<div className="parcel-value">value</div>
            </div>
          </div>
          <div className="card-right">
            <div className="card-items">
              Parcel status:<div className="parcel-value">value</div>
            </div>
            {codeStatus === false ? (
              <div className="card-items">
                Pickup code:<div className="parcel-value">value</div>
              </div>
            ) : (
              <div className="card-items">
                Delivery code:<div className="parcel-value">value</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
