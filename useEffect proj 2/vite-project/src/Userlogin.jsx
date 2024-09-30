import React, { useContext, createContext, useState, useEffect } from 'react';

const UserContext = createContext();

const Userlogin = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = () => {
      fetch(`https://randomuser.me/api/`)
        .then((response) => response.json())
        .then((result) => setUser(result.results[0]))
        .catch((error) => console.error('Server side error:', error));
    };
    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={user}>
      <h1>Userlogin</h1>
      <Page />
    </UserContext.Provider>
  );
};

const Page = () => {
  const user = useContext(UserContext);

  if (user?.login?.username) { // Corrected: 'username' instead of 'userName'
    return <p>You are logged in as {user.login.username}</p>;
  } else {
    return <p>You are not logged in</p>;
  }
};

export default Userlogin;
