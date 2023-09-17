// StudentForm.tsx
import React, { useState, ChangeEvent, FormEvent } from "react";
import "./StudentForm.css";

interface FormData {
  name: string;
  regNo: string;
  branch: string;
}

interface CongratulatoryTileProps {
  houseName?: string;
  setHouseName: (houseName: string) => void; // Add setHouseName prop
}

function StudentForm({ setHouseName }: CongratulatoryTileProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    regNo: "",
    branch: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // You can perform further actions here, e.g., sending the data to a server
    console.log("Form submitted:", formData);

    // Set the houseName when the form is submitted
    setHouseName(formData.branch); // You can change this to the appropriate field
  };

  const [isShown, setIsShown] = useState(false);

  const handleShowButtonClick = () => {
    setIsShown(true);
  };

  return (
    <>
      <div className="form">
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="branch">Branch:</label>
              <input
                type="text"
                id="branch"
                name="branch"
                value={formData.branch}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="reg-no">Registration Number:</label>
              <input
                type="text"
                id="reg-no"
                name="regNo"
                value={formData.regNo}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="submit-button" disabled>
              Submit
            </button>
          </form>
        </div>
      </div>
      {/* Congratulations tile */}
      <div>
        <button onClick={handleShowButtonClick}>
          Show Congratulatory Tile
        </button>
        {isShown && (
          <div className="overlay">
            <div className="tile popped-out">
              <div className="tile-content">
                <h1>Congratulations!</h1>
                <p>You got this house:</p>
                <p className="house-name">
                  {formData.branch || "Default House"}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default StudentForm;
