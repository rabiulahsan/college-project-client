import { useEffect, useState } from "react";
import UseAuth from "./UseAuth";

const useAdmitted = () => {
  const [users, setUsers] = useState([]);
  const { user } = UseAuth();
  useEffect(() => {
    fetch("https://college-facilities-server.vercel.app/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => console.error(error));
  }, []);

  const loggedUser = users.filter((u) => u.email == user?.email);
  // console.log(loggedUser[0]);
  const admitted = loggedUser[0]?.admitted;
  //   console.log(admitted);
  return { admitted };
};

export default useAdmitted;
