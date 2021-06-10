import React, { useEffect, useState } from "react";
import "./styles/users.scss";

import { UserList } from "./user-list";

import axios from "axios";

const Users = () => {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:4001/")
  //     .then((data) => data.json())
  //     .then((response) => setData(response))
  //     .then(function (response) {
  //       console.log(response);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);
  const [user, setUser] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    // Send GET request to  endpoint
    axios
      .get("https://api.teztracker.com/v2/data/tezos/mainnet/blocks")
      .then((response) => {
        // Update state
        setUser(response.data);
        console.log(response.data);
        // Update loading state
        setLoading(false);
      })
      .catch((error) =>
        console.error(`There was an error retrieving the user list: ${error}`)
      );
  };

  return (
    <>
      <section className="user">
        <div className="container-table">
          <UserList user={user} loading={loading} />
        </div>
      </section>
    </>
  );
};

export default Users;
