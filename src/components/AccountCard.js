import React, { useState } from "react";
import styled from "styled-components";
import { axios } from "../utils";
import { useHistory } from "react-router-dom";

const StyledCard = styled.div``;

const AccountCard = props => {
  const { push } = useHistory();
  const [isEditing, setIsEditing] = useState(false);
  const [editValues, setEditValues] = useState(null);
  const {
    account: { id, name, budget }
  } = props;
  const deleteItem = e => {
    e.preventDefault();
    axios()
      .delete(`/api/accounts/${id}`)
      .then(res => {
        push("/success");
      })
      .catch(err => {
        console.log(err);
        alert(err.message);
      });
  };
  const openEditor = e => {
    e.preventDefault();
    setIsEditing(!isEditing);
    setEditValues({ name, budget });
  };
  const postChanges = e => {
    e.preventDefault();
    axios()
      .put(`/api/accounts/${id}`, editValues)
      .then(res => {
        push("/success");
      })
      .catch(err => {
        console.log(err);
      });
  };
  const inputHandler = e => {
    const { name, value } = e.target;
    setEditValues({ ...editValues, [name]: value });
  };
  const openPage = e => {
    e.preventDefault();
    push(`/accounts/${id}`);
  };
  return (
    <StyledCard>
      <h2>
        {id}.&nbsp;{name}
      </h2>
      {isEditing ? (
        <form onSubmit={postChanges}>
          <div>
            <label>Name:&nbsp;</label>
            <input
              type="text"
              name="name"
              value={editValues.name}
              onChange={inputHandler}
            />
          </div>
          <div>
            <label>Budget:&nbsp;</label>
            <input
              type="text"
              name="budget"
              value={editValues.budget}
              onChange={inputHandler}
            />
          </div>
          <input type="submit" value="Submit Changes" />
        </form>
      ) : (
        <>
          <p>{budget}</p>
          <button onClick={deleteItem}>Delete Account</button>
          <button onClick={openEditor}>Edit Account</button>
          <button onClick={openPage}>View Account</button>
        </>
      )}
    </StyledCard>
  );
};
export default AccountCard;
