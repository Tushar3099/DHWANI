import React, { useState, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = props => {
  const detail = {
    name: "Tushar",
    email: "tush@gmail.com",
    bio: "i am fine",
    image:
      "https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png"
  };

  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={[user, setUser]}>
      {props.children}
    </UserContext.Provider>
  );
};
