import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Image } from "antd";

const Container = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
`;

const SImage = styled(Image)`
  width: 70px;
  height: 110px;
`;

const Poster = styled.div`
  width: 70px;
  height: 110px;
  background-color: gray;
`;

const Name = styled.div`
  text-align: center;
  font-size: 12px;
`;

const Season = ({ name, poster_path }) => {
  return (
    <Container>
      {poster_path ? (
        <SImage
          src={`https://image.tmdb.org/t/p/w220_and_h330_face${poster_path}`}
          alt={`${poster_path}`}
        />
      ) : (
        <Poster />
      )}
      <Name>{name}</Name>
    </Container>
  );
};

Season.propTypes = {
  name: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
};

export default Season;
