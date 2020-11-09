import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Badge } from "antd";
import Detail from "../pages/Detail";

const Container = styled.div`
  margin: 10px;
  width: 220px;
  display: flex;
  flex-direction: column;
`;

const Info = styled.dl`
  text-align: center;
`;

const Title = styled.dt`
  font-size: 16px;
  font-weight: 500;
`;

const Release = styled.dd`
  color: gray;
`;

const List = ({
  title,
  poster_path,
  release_date,
  vote_average,
  name,
  first_air_date,
  id,
}) => {
  const [visible, setVisible] = useState(false);
  const showModal = (e) => {
    e.preventDefault();
    setVisible(true);
  };

  return (
    <Container>
      <Badge
        count={vote_average}
        offset={[-5, 0]}
        style={{ backgroundColor: "gray" }}
      >
        <img
          src={`https://image.tmdb.org/t/p/w220_and_h330_face${poster_path}`}
          alt={`${poster_path}`}
          onClick={showModal}
        />
        <Detail id={id} visible={visible} setVisible={setVisible} />
      </Badge>
      <Info>
        <Title>{title ? title : name}</Title>
        <Release>{release_date ? release_date : first_air_date}</Release>
      </Info>
    </Container>
  );
};

List.propTypes = {
  title: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  vote_average: PropTypes.string.isRequired,
};

export default List;
