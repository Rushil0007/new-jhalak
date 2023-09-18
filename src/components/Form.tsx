import React, { useState, ChangeEvent, FormEvent } from "react";
import "./StudentForm.css";

interface FormData {
  name: string;
  regNo: string;
  branch: string;
}

interface CongratulatoryTileProps {
  houseName?: string;
}

function StudentForm({ houseName }: CongratulatoryTileProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    regNo: "",
    branch: "",
  });

  const [showForm, setShowForm] = useState(false);
  const [showCongratulatoryTile, setShowCongratulatoryTile] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFindHouseClick = () => {
    setShowForm(true);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // You can perform further actions here, e.g., sending the data to a server
    console.log("Form submitted:", formData);

    // Hide the form and show the congratulatory tile
    setShowForm(false);
    setShowCongratulatoryTile(true);
  };

  return (
    <>
      {!showForm && !showCongratulatoryTile && (
        <div className="flex justify-center items-center">
          <button
            type="button"
            className="submit-button"
            onClick={handleFindHouseClick}
          >
            Find Your House
          </button>
        </div>
      )}

      {showForm && (
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

              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}

      {showCongratulatoryTile && (
        <div className="overlay">
          <div className="tile popped-out">
            <div className="tile-content">
              <h1>Congratulations!</h1>
              <p>You got this house:</p>
              <p className="house-name">{houseName || "Default House"}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default StudentForm;
