import React from "react";
import Profile from "./component/Profiles";

const userData = [
  { id: 1, name: "anisha", email: "anisha@gmail.com" },
  { id: 2, name: "neslanes", email: "nesla@gmail.com" },
  { id: 3, name: "arundhathy", email: "arundhathy@gmail.com" },
];

function App() {
  return (
    <div className="list">
      {userData.map((user) => (
        <Profile key={user.id} name={user.name} email={user.email} />
      ))}
    </div>
  );
}

export default App;
