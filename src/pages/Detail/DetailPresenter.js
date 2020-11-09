import React from "react";
import styled from "styled-components";
import { Image, Modal } from "antd";
import Season from "../../Components/Season";

const Wrapper = styled.div`
  display: flex;
`;

const Content = styled.div`
  width: calc(100% - 250px);
  margin: 0 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.div`
  margin-bottom: 5px;
  font-size: 20px;
  font-weight: 700;
`;

const Summary = styled.div`
  font-size: 17px;
  margin-bottom: 20px;
  font-weight: 500;
`;

const Overview = styled.div`
  font-size: 14px;
  margin-bottom: 30px;
`;

const More = styled.a`
  width: 40px;
`;

const Seasons = styled.div``;

const SeasonTitle = styled.div`
  font-size: 17px;
  margin-bottom: 5px;
  font-weight: 500;
`;

const SeasonPoster = styled.div`
  display: flex;
  width: 680px;
  overflow: auto;
`;

const DetailPresenter = ({
  detail,
  visible,
  handleOk,
  handleCancel,
  loading,
}) => {
  return (
    <Modal
      title={loading ? "loading..." : detail.title ? detail.title : detail.name}
      autoFocusButton={null}
      visible={visible}
      onOk={handleOk}
      onCancel={handleCancel}
      width={1000}
      centered
      maskStyle={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w220_and_h330_face${detail.backdrop_path})`,
        opacity: "1",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        width: "100%",
        height: "100%",
        filter: "blur(3px)",
        backgroundSize: "75%",
      }}
    >
      <Wrapper>
        {loading ? (
          "loading..."
        ) : (
          <>
            <Image
              src={`https://image.tmdb.org/t/p/w220_and_h330_face${detail.poster_path}`}
              alt={`${detail.poster_path}`}
              width={220}
              height={332}
            />
            {detail.title ? (
              <Content>
                <Title>{detail.title}</Title>
                <Summary>
                  {detail.release_date} •{" "}
                  {detail.genres.map((genre) => `${genre.name} `)}•{" "}
                  {`${Math.floor(detail.runtime / 60)}h ${
                    detail.runtime % 60
                  }m`}
                </Summary>
                <Overview>{detail.overview}</Overview>
                <More
                  target="_blank"
                  href={`https://www.imdb.com/title/${detail.imdb_id}`}
                >
                  <svg viewBox="0 0 48 48">
                    <path
                      fill="#FFC107"
                      d="M44 13H4c-2.2 0-4 1.8-4 4v16c0 2.2 1.8 4 4 4h40c2.2 0 4-1.8 4-4V17c0-2.2-1.8-4-4-4z"
                    />
                    <g fill="#263238">
                      <path d="M28.1 18h-3.7v13.1h3.7c2 0 2.8-.4 3.3-.7.6-.4.9-1.1.9-1.8v-7.9c0-.9-.4-1.7-.9-2-.8-.5-1.1-.7-3.3-.7zm.7 10.3c0 .6-.7.6-1.3.6V20c.6 0 1.3 0 1.3.6v7.7zM33.8 18v13.3h2.8s.2-.9.4-.7c.4 0 1.5.6 2.2.6s1.1 0 1.5-.2c.6-.4.7-.7.7-1.3v-7.8c0-1.1-1.1-1.8-2-1.8s-1.8.6-2.2.9v-3h-3.4zm3.6 4.2c0-.4 0-.6.4-.6.2 0 .4.2.4.6v6.6c0 .4 0 .6-.4.6-.2 0-.4-.2-.4-.6v-6.6zM22.7 31.3V18h-4.4l-.8 6.3-1.1-6.3h-4v13.3h2.9v-7.4l1.3 7.4h2l1.3-7.4v7.4zM7.6 18h3.1v13.3H7.6z" />
                    </g>
                  </svg>
                </More>
              </Content>
            ) : (
              <Content>
                <Title>{detail.name}</Title>
                <Summary>
                  {detail.first_air_date} ~ {detail.last_air_date} •{" "}
                  {detail.genres.map((genre) => `${genre.name} `)}
                </Summary>
                <Overview>{detail.overview}</Overview>
                {detail.seasons ? (
                  <Seasons>
                    <SeasonTitle>Seasons</SeasonTitle>
                    <SeasonPoster>
                      {detail.seasons.map((season, index) => (
                        <Season key={index} {...season} />
                      ))}
                    </SeasonPoster>
                  </Seasons>
                ) : (
                  ""
                )}
              </Content>
            )}
          </>
        )}
      </Wrapper>
    </Modal>
  );
};

export default DetailPresenter;
