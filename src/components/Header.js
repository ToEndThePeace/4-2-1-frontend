import React, { useState } from "react";
import styled from "styled-components";
import { NavLink, useHistory } from "react-router-dom";

const StyledHeader = styled.header`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  padding: 20px 10%;
`;

const Header = props => {
  const { push } = useHistory();
  const [searchVal, setSearchVal] = useState("");
  const inputHandler = e => setSearchVal(e.target.value);
  const submitHandler = e => {
    e.preventDefault();
    setSearchVal("");
    push(`/accounts/${searchVal}`);
  };
  return (
    <StyledHeader>
      <h2>Links:</h2>
      <nav>
        <NavLink exact to="/accounts">
          Accounts
        </NavLink>
        <NavLink exact to="/accounts/new">
          New Account
        </NavLink>
      </nav>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="search"
          placeholder="Find Account by ID..."
          value={searchVal}
          onChange={inputHandler}
        />
        <input type="submit" value="Search" />
      </form>
    </StyledHeader>
  );
};

export default Header;
