import "./ParcelDetail.css";

export default function ParcelDetail() {
  return (
    <form className="detail-form">
      <div className="form-top">
        <div className="top-left">
          <div className="form-row">
            <div className="info-title">Sender name </div>
            <span>Value</span>
          </div>
          <div className="form-row">
            <div className="info-title">Sender tel </div>
            <span>Value</span>
          </div>
          <div className="form-row">
            <div className="info-title">Sender address</div>
            <span>Value</span>
          </div>
          <div className="form-row">
            <div className="info-title">Locker for pickup</div>
            <span>Value</span>
          </div>
          <div className="form-row">
            <div className="info-title">Pickup code</div>
            <span>Value</span>
          </div>
        </div>
        <div className="top-right">
          <div className="form-row">
            <div className="info-title">Recipient name </div>
            <span>Value</span>
          </div>
          <div className="form-row">
            <div className="info-title">Recipient tel </div>
            <span>Value</span>
          </div>
          <div className="form-row">
            <div className="info-title">Recipient address</div>
            <span>Value</span>
          </div>
          <div className="form-row">
            <div className="info-title">Time for pickup</div>
            <span>Value</span>
          </div>
          <div className="form-row">
            <div className="info-title">Pickup time</div>
            <span>Value</span>
          </div>
        </div>
      </div>
    </form>
  );
}
