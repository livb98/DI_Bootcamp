import React from "react";

const Toggle = ({ toggle, handleToggleChange }) => {
  return (
    <>
        <div className='toggle-container' onClick={handleToggleChange}>
            <div className={`toggle-btn ${!toggle ? "disable" : ""}`}>
                {toggle ? "DONE" : "NOT DONE"}
            </div>
        </div>
 
    </>
   
  );
};

export default Toggle;