import React from "react";
import news from "../../images/news_1.png";
import "./News.css";

const News = ({ items }) => {
  function renderItems() {
    return items.map((item, index) => {
      return (
        <div className="news_item col-4">
          <div className="news_item__image">
            <img src={item.image} alt="news" />
          </div>
          <div className="news_item__text">
            <span className="date">{item.date}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        </div>
      );
    });
  }
  return (
    <div className="news_container container">
      <h2>LATEST NEWS</h2>
      <div className="news_items col-12">{renderItems()}</div>
    </div>
  );
};

News.defaultProps = {
  items: [
    {
      image: news,
      date: "01 Jan 2019",
      title: "Typesetting Industry",
      text: "lorem ipsum is simply dummy text of the printing and"
    },
    {
      image: news,
      date: "01 Jan 2019",
      title: "Typesetting Industry",
      text: "lorem ipsum is simply dummy text of the printing and"
    },
    {
      image: news,
      date: "01 Jan 2019",
      title: "Typesetting Industry",
      text: "lorem ipsum is simply dummy text of the printing and"
    }
  ]
};

export default News;
