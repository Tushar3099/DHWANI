import React, { useState, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = props => {
  const [user, setUser] = useState({
    name: "Tushar",
    email: "tush@gmail.com",
    bio: "Be confident in whatever you do...",
    image:
      "https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png"
  });

  return (
    <UserContext.Provider value={[user, setUser]}>
      {props.children}
    </UserContext.Provider>
  );
};
