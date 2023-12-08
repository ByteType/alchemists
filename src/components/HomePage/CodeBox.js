import React, { useState, useRef, useEffect } from "react";
import LockerPicker from "../UserPage/LockerPicker";
import { LockerActionTypes } from "../../enum/LockerActionType";
import CodeInputFields from "./CodeInputFields";
import { apiEndpoints } from "../../config/ApiEndpoints";
import "./CodeBox.css";

export default function CodeBox() {
  const itemsRef = useRef([]);
  const [userInput, setUserInput] = useState("");
  const [action, setAction] = useState(LockerActionTypes.PICK_UP);
  const [selectedLocker, setSelectedLocker] = useState("");
  const [message, setMessage] = useState("");
  const [showCloseButton, setShowCloseButton] = useState(false);

  useEffect(() => {
    setMessage("");
  }, [action]);

  const handleLockerSelection = (selectedLockerValue) => {
    setSelectedLocker(selectedLockerValue);
  };

  const verifyCode = async (event) => {
    event.preventDefault();

    if (userInput.length < 4) {
      setMessage("Please enter a four-digit number!");
      return;
    }

    setMessage("");

    if (action === LockerActionTypes.Delivery) {
      try {
        const payload = {
          lockerId: Number(selectedLocker),
          deliveryCode: userInput,
        };

        const response = await fetch(apiEndpoints.LOCKER_DELIVERY, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          const errorResponse = await response.json();
          setMessage(errorResponse.message);
          return;
        }
        const responseData = await response.json();
        console.log(responseData);
        setMessage(`DOOR ${responseData.cabinetId} OPEN FOR DELIVERY`);
        setShowCloseButton(true);
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      try {
        const payload = {
          lockerId: Number(selectedLocker),
          pickedUpAt: new Date().toISOString(),
          pickupCode: userInput,
        };

        const response = await fetch(apiEndpoints.LOCKER_PICKUP, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });
        if (!response.ok) {
          const errorResponse = await response.json();
          setMessage(errorResponse.message);
          return;
        }
        const responseData = await response.json();
        console.log(responseData);
        setShowCloseButton(true);
        setMessage(`DOOR ${responseData.cabinetId} OPEN FOR PICKUP`);
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  const closeCabinetDoor = () => {
    setShowCloseButton(false);
    setMessage("Parcel operation completed successfully.");
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <div className="locker-container">
      <div className="locker">
        <h2>{action}</h2>
        {message ? <div className="message">{message}</div> : <div></div>}
        <div className="code-box">
          <CodeInputFields
            userInput={userInput}
            setUserInput={setUserInput}
            itemsRef={itemsRef}
          />
        </div>
        <LockerPicker
          label="Choose a parcel locker"
          onLockerChange={handleLockerSelection}
          name="expectedSenderLockers"
          value={selectedLocker}
        />

        <div className="locker-status">
          {action === LockerActionTypes.PICK_UP
            ? "For delivery? "
            : "For pick up? "}
          {action === LockerActionTypes.PICK_UP ? (
            <span
              data-testid="toDeliveryButton"
              onClick={() => {
                setAction(LockerActionTypes.Delivery);
              }}
              className="to-delivery"
            >
              Delivery now!
            </span>
          ) : (
            <span
              data-testid="toPickUpButton"
              onClick={() => {
                setAction(LockerActionTypes.PICK_UP);
              }}
            >
              Pick up now!
            </span>
          )}
        </div>

        <div className="code-btn-box">
          <button className="code-btn" onClick={verifyCode}>
            OK
          </button>
          <br />
          {showCloseButton && (
            <button className="close-door-btn" onClick={closeCabinetDoor}>
              CLOSE CABINET DOOR
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
