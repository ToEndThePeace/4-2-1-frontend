import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { axios } from "../utils";

const StyledForm = styled.form`
  padding: 20px 10%;
`;

const initialValues = { name: "", budget: "" };

const AccountForm = props => {
  const { push } = useHistory();
  const [newAccount, setNewAccount] = useState(initialValues);
  const inputHandler = e => {
    const { name, value } = e.target;
    setNewAccount({
      ...newAccount,
      [name]: value
    });
  };
  const submitHandler = e => {
    e.preventDefault();
    axios()
      .post("/api/accounts", newAccount)
      .then(res => {
        push("/success");
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <StyledForm onSubmit={submitHandler}>
      <legend>New Account:</legend>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={newAccount.name}
          onChange={inputHandler}
        />
      </div>
      <div>
        <label>Budget:</label>
        <input
          type="text"
          name="budget"
          value={newAccount.budget}
          onChange={inputHandler}
        />
      </div>
      <input type="submit" value="Submit" />
    </StyledForm>
  );
};

export default AccountForm;
