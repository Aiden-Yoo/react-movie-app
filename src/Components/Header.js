import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { Menu } from "antd";
import styled from "styled-components";

const Title = styled.span`
  margin-left: 200px;
  margin-right: 30px;
  font-size: 40px;
  font-weight: 500;
`;

const MenuBox = styled(Menu.Item)`
  width: 60px;
  text-align: center;
`;

const Header = () => {
  const [current, serCurrent] = useState("movie");

  const handleClick = (e) => {
    serCurrent(e.key);
  };

  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      <Title>NOTFLIX</Title>
      <MenuBox key="movie">
        <Link to="/">Movie</Link>
      </MenuBox>
      <MenuBox key="tv">
        <Link to="/tv">TV</Link>
      </MenuBox>
    </Menu>
  );
};

export default Header;
