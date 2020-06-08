import React, { useState, useEffect } from "react";
import { axios } from "../utils";
import styled from "styled-components";

import AccountCard from "./AccountCard";

const StyledList = styled.div`
  padding: 20px 10%;
`;

const AccountsList = props => {
  const [list, setList] = useState(null);
  useEffect(() => {
    axios()
      .get("/api/accounts")
      .then(res => {
        setList(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <StyledList>
      <h2>Accounts:</h2>
      {list && list.map(x => <AccountCard account={x} />)}
    </StyledList>
  );
};
export default AccountsList;
