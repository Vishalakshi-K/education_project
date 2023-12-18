import React, { useEffect, useState } from "react";
import axios from "axios";
import { getUserDetails } from "./AuthState";

export default function Profile() {
  const [users, setUsers] = useState([]);
  const userDetails = getUserDetails();

  useEffect(() => {
    LoadUser();
  }, []);
  const LoadUser = async () => {
    const result = await axios.get(
      `http://localhost:8080/api/getprofile/${userDetails.id}`
    );

    setUsers(result.data);
  };

  return (
    <>
      <thead>
        <tr>
          <th>fullname</th>
          <th>email</th>
          <th>city</th>
          <th>phonenumber</th>
        </tr>
      </thead>
      <tbody>
        {/* {
        users.map((user, index)=>( */}

        <tr>
          {/* <th scope="row" key={index}>{index+1}</th> */}
          <td>{users.fullname}</td>
          <td>{users.email}</td>
          <td>{users.city}</td>
          <td>{users.phonenumber}</td>
        </tr>
        {/*           
        ))
      } */}
      </tbody>
    </>
  );
}
