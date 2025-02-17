import React from "react";
import styles from "./Options.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Budjets() {
  const [BudjetAmount, setBudjetAmount] = useState(0);
  const [BudjetType, setBudjetType] = useState("");
  const handleSubmitBudjet = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8000/api/users/budget/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "guru@gmail.com",
        Budjet: BudjetAmount,
        description: BudjetType,
      }),
    });
    const json = await response.json();
    console.log(json);
  };

  return (
    <div className={styles.dropdownContainer}>
      <div className={styles.dropdowns}>
        <h3 className={styles.subtitle}>Budjet</h3>
        <select
          className={styles.dropdown}
          value={BudjetType}
          onChange={(event) => setBudjetType(event.target.value)}
        >
          <option value="">Select</option>
          <option value="option6">Food</option>
          <option value="option7">Travel</option>
          <option value="option8">Rent</option>
          <option value="option9">Groceries</option>
          <option value="option10">Bills</option>
          <option value="option11">Others</option>
        </select>
        <input
          type="number"
          id="expAmount"
          value={BudjetAmount}
          className={styles.input}
          onChange={(event) => setBudjetAmount(event.target.value)}
          required
        />
        <button className={styles.button} onClick={handleSubmitBudjet}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default Budjets;
