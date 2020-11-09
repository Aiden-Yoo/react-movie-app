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

const TVPresenter = ({
  loadingPop,
  loadingOn,
  loadingToday,
  popular,
  onAir,
  airingToday,
}) => {
  return (
    <>
      <Tabs defaultActiveKey="1">
        <TabPane tab="인기 방송" key="1">
          <Wrapper>
            {loadingPop && <h3>Loading...</h3>}
            {popular &&
              popular.map((movie, index) => <List key={index} {...movie} />)}
          </Wrapper>
        </TabPane>
        <TabPane tab="방영 중" key="2">
          <Wrapper>
            {loadingOn && <h3>Loading...</h3>}
            {onAir &&
              onAir.map((movie, index) => <List key={index} {...movie} />)}
          </Wrapper>
        </TabPane>
        <TabPane tab="오늘 방영" key="3">
          <Wrapper>
            {loadingToday && <h3>Loading...</h3>}
            {airingToday &&
              airingToday.map((movie, index) => (
                <List key={index} {...movie} />
              ))}
          </Wrapper>
        </TabPane>
      </Tabs>
    </>
  );
};

export default TVPresenter;
