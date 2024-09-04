import React from 'react';
import './createquize.css';
function CreateQuize() {
  return (
<div className='createQuize'>
       <input
          className="input"
          type="text"
          placeholder="Quize Name"
        />
        <div className='quizeType'>
            <p>Quiz Type</p>
            <button>Q & A</button>
            <button>Poll Type</button>
        </div>
        <div>
            <button>Cancel</button>
            <button>Continue</button>
        </div>
        </div>
)}

export default CreateQuize
