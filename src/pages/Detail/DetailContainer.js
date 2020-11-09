import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { movieApi, tvApi } from "../../api";
import DetailPresenter from "./DetailPresenter";

const DetailContainer = ({
  id,
  visible,
  setVisible,
  location: { pathname },
}) => {
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState([]);

  const detailInfo = async () => {
    if (visible && pathname === "/movie") {
      try {
        let { data } = await movieApi.detail(id);
        setDetail(data);
      } catch (e) {
        console.log(`Load fail: ${e}`);
      } finally {
        setLoading(false);
      }
    } else if (visible && pathname === "/tv") {
      try {
        let { data } = await tvApi.detail(id);
        setDetail(data);
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
    <DetailPresenter
      detail={detail}
      visible={visible}
      handleOk={handleOk}
      handleCancel={handleCancel}
      loading={loading}
    />
  );
};

DetailContainer.propTypes = {
  title: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  vote_average: PropTypes.string.isRequired,
};

export default withRouter(DetailContainer);
