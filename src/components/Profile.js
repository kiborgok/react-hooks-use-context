import React, { useContext } from "react";
import Interests from "./Interests";
// import the UserContext we created
import { UserContext } from "../context/user";

function Profile() {
  // call useContext with our UserContext
  const { user } = useContext(UserContext);
  // console.log("user", user);
  if (!user) return <h2>Please Login To View Profile</h2>;

  return (
    <div>
      <h2>{user.name}'s Profile</h2>
      <Interests interests={user.interests} />
    </div>
  );
}

export default Profile;
