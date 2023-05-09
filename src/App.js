import "./App.css";
import React from "react";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({});
  const [allFormData, setAllFormData] = useState([]);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isDataDisplayed, setIsDataDisplayed] = useState(false);

  const handelChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const tempObj = [...allFormData];
    tempObj.push(formData);
    setAllFormData(tempObj);
    setIsFormSubmitted(true); // set the form submission status to true
    setIsDataDisplayed(true);
    console.log("all form data :", allFormData);
  };
  const handleBack = () => {
    setIsDataDisplayed(false);
    setIsFormSubmitted(false);
  };

  return (
    <div className="App">
      {!isFormSubmitted && !isDataDisplayed && ( // show the form only if it has not been submitted
        <div className="form">
          <h2>EMPLOYEE FEEDBACK FORM</h2>
          <br />
          <form onSubmit={handleSubmit}>
            <label>Name:-</label>
            <input type="text" name="name" id="name" onChange={handelChange} />
            <br />
            <br />
            <label>Department:-</label>
            <input type="text" name="department" onChange={handelChange} />
            <br />
            <br />
            <label>Rating:-</label>
            <input type="number" name="rating" onChange={handelChange} />
            <br />
            <br />
            <input type="submit" value="Submit" />
          </form>
        </div>
      )}

      {isFormSubmitted && isDataDisplayed && ( // show the data only if the form has been submitted
        <div className="database">
          <h1>EMPLOYEE FEEDBACK DATA</h1>
          <div className="dataContainer">
            {allFormData.map((value, index) => {
              return (
                <div className="dataBase">
                  <div key={index} className="data">
                    Name : {value.name} | Department : {value.department} | Rating
                    : {value.rating}
                  </div>
                </div>
              );
            })}
          </div>
          <button type="button" onClick={handleBack}>Back</button>
        </div>
      )}
    </div>
  );
}



export default App;
