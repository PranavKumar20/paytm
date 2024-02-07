import { useState, useEffect } from "react";
import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";
import axios from "axios"

export const Dashboard = () => {
  const [balance, setBalance] = useState(0);
  const [name, setName] = useState("User");

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://paytm-qdku.onrender.com/api/v1/account/balance",
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      // console.log(response);
      setBalance(response.data.balance);
    };
    fetchData();
  }, []);
  
  return (
    <div>
      <Appbar name={name}/>
      <div className="m-8">
        <Balance value={balance} />
        <Users />
      </div>
    </div>
  );
};
