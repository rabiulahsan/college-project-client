import { useEffect, useState } from "react";

const UseAllColleges = () => {
  const [colleges, setColleges] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/colleges")
      .then((response) => response.json())
      .then((data) => {
        setColleges(data);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);
  return [colleges, isLoading];
};

export default UseAllColleges;
