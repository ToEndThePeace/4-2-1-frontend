import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { axios } from "../utils";
import styled from "styled-components";

const StyledPage = styled.div``;

const AccountPage = props => {
  const { push } = useHistory();
  const [account, setAccount] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios()
      .get(`/api/accounts/${id}`)
      .then(res => {
        setAccount(res.data);
      })
      .catch(err => {
        push("/accounts/failure");
      });
  }, [id, push]);

  return (
    <StyledPage>
      {account ? (
        <>
          <h1>
            {account.id}. {account.name}
          </h1>
          <p>{account.budget}</p>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </StyledPage>
  );
};

export default AccountPage;
