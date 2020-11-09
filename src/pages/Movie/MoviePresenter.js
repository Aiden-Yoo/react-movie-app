import React from "react";
import styled from "styled-components";
import { Tabs } from "antd";
import List from "../../Components/List";

const { TabPane } = Tabs;

const Wrapper = styled.div`
  padding: 0 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const MoviePresenter = ({
  loadingPop,
  loadingNow,
  loadingUp,
  popular,
  nowPlaying,
  upcoming,
}) => {
  return (
    <>
      <Tabs defaultActiveKey="1">
        <TabPane tab="인기 영화" key="1">
          <Wrapper>
            {loadingPop && <h3>Loading...</h3>}
            {popular &&
              popular.map((movie, index) => <List key={index} {...movie} />)}
          </Wrapper>
        </TabPane>
        <TabPane tab="상영 중" key="2">
          <Wrapper>
            {loadingNow && <h3>Loading...</h3>}
            {nowPlaying &&
              nowPlaying.map((movie, index) => <List key={index} {...movie} />)}
          </Wrapper>
        </TabPane>
        <TabPane tab="출시 예정" key="3">
          <Wrapper>
            {loadingUp && <h3>Loading...</h3>}
            {upcoming &&
              upcoming.map((movie, index) => <List key={index} {...movie} />)}
          </Wrapper>
        </TabPane>
      </Tabs>
    </>
  );
};

export default MoviePresenter;
