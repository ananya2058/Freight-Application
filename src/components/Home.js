import React, { useState } from "react";
import axios from "axios";
import "./Home.css";

export default function Home() {
  const [name, setName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [dropdownValue, setDropdownValue] = useState("");

  const options = [
    { value: "option1", label: "Male" },
    { value: "option2", label: "Female" },
    { value: "option3", label: "Others" },
  ];

  const handleDropdownChange = (e) => {
    setDropdownValue(e.target.value);
  };

  const submit = async (e) => {
    e.preventDefault();

    try {
      alert("submitted");
      await axios.post("http://localhost:8000/", {
        name,
        contactNumber,
        email,
        notes,
        dateOfBirth,
        dropdownValue,
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="cont">
      <form action="POST" className="form-container">
        <p>Username :</p>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Name"
          className="input-field"
        />

        <p>Contact Number :</p>
        <input
          type="text"
          name="contactNumber"
          value={contactNumber}
          onChange={(e) => {
            setContactNumber(e.target.value);
          }}
          placeholder="Contact Number"
          className="input-field"
        />

        <p>Email ID :</p>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Email ID"
          className="input-field"
        />

        <p>Date of Birth :</p>
        <input
          type="date"
          name="dateOfBirth"
          value={dateOfBirth}
          onChange={(e) => {
            setDateOfBirth(e.target.value);
          }}
          placeholder="Date of Birth"
          className="input-field"
        />

        <p>Gender :</p>
        <select
          name="dropdownValue"
          value={dropdownValue}
          onChange={handleDropdownChange}
          className="input-field"
        >
          <option value="">Select an option</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>


        <p>Notes :</p>
        <textarea
          name="notes"
          value={notes}
          onChange={(e) => {
            setNotes(e.target.value);
          }}
          placeholder="Notes"
          cols="30"
          rows="5"
          className="input-field textarea-field"
        ></textarea>

        <input
          type="submit"
          onClick={submit}
          value="Submit"
          className="submit-button"
        />
      </form>
    </div>
  );
}