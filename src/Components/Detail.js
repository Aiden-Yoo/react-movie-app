import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Image, Badge, Modal } from "antd";
import { movieApi } from "../api";

const Detail = ({ title, name, id, poster_path, visible, setVisible }) => {
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState([]);

  const detailInfo = async () => {
    if (visible) {
      try {
        let { data } = await movieApi.detail(id);
        setDetail(data);
        console.log(data);
      } catch (e) {
        console.log(`Load fail: ${e}`);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleOk = (e) => {
    setVisible(false);
  };

  const handleCancel = (e) => {
    setVisible(false);
  };

  useEffect(() => {
    detailInfo();
  }, [visible]);

  return (
    <Modal
      title={title ? title : name}
      autoFocusButton={null}
      visible={visible}
      onOk={handleOk}
      onCancel={handleCancel}
      width={1000}
      centered
    >
      <Image
        src={`https://image.tmdb.org/t/p/w220_and_h330_face${poster_path}`}
        alt={`${poster_path}`}
      />
    </Modal>
  );
};

Detail.propTypes = {
  title: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  vote_average: PropTypes.string.isRequired,
};

export default Detail;
