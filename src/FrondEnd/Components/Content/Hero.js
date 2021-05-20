import React from "react";
import { Carousel } from "antd";
import "../Content/Hero.css";
function Hero() {
  const contentStyle = {
    height: "100vh",
    color: "red",
    lineHeight: "160px",
    textAlign: "center",
    // background: "#364d79",
  };

  const items = [
    {
      key: 1,
      title: "title-1",
      Content: "necessitatibus officiis repudiandae est deserunt delectus dolorem iure porro distinctio fuga, nostrum doloremque",
    },
    {
      key: 2,
      title: "title-2",
      Content: "the epolepels reeosifeet",
    },
    {
      key: 3,
      title: "title-3",
      Content: "dgeebejkheeem, klthe lxlxlxl the sismlts sksks ebejkhe",
    },
  ];
  return (
    <div className="heroBlock">
      <Carousel autoplay>
        {items.map((item) => {
          return (
            <div>
              <h3 style={contentStyle}>{item.Content}</h3>
              {/* <p>{item.Content}</p> */}
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default Hero;
