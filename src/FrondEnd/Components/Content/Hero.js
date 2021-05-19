import React from "react";
import { Carousel } from "antd";

function Hero(props) {
  const contentStyle = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  const items = [
    {
      key: 1,
      title: "title-1",
      Content: "content-1",
    },
    {
      key: 2,
      title: "title-2",
      Content: "content-2",
    },
    {
      key: 3,
      title: "title-3",
      Content: "content-3",
    },
  ];
  return (
    <div>
      <Carousel autoplay>
        {items.map((item) => {
          return (
            <div>
              <h3 style={contentStyle}>{item.title}</h3>
              <h3>{item.Content}</h3>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default Hero;
