import React from "react";

function Profile(props) {
  const { userDeta,key } = props;

  const { role, imageUrl, name } = userDeta;

  return (
    <div>
      <h1> {name}</h1>
      <img src={imageUrl} alt={name} />
      <p>{role}</p>
    </div>
  );
}

export default Profile;