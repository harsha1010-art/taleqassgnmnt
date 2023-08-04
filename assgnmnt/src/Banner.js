import React from "react";

const Banner = ({ bannerData }) => {
  return (
    <div className="banner">
      <h2>{bannerData.text}</h2>
      {bannerData.button && (
        <a href={bannerData.link} className="banner-button">
          {bannerData.btn_name}
        </a>
      )}
      {bannerData.link && (
        <a href={bannerData.link}>{bannerData.link_name}</a>

      )}
    </div>
  );
};

export default Banner;