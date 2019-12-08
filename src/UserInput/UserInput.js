import React from 'react';
import './UserInput.css';

const UserInput = props => {
  const inputStyle = {
    boarder: '2px solid red'
  };

  return (
    <div className="UserInput">
      <input
        type="text"
        style={inputStyle}
        onChange={props.changed}
        value={props.currentPassword}
      ></input>
    </div>
  );
};

export default UserInput;
