import React from "react";
import shipping from '../../images/shipping.svg'
import refund from '../../images/refund.svg'
import overlay from '../../images/support.svg'
import './Info.css'

const Info = () => {
  const info = [
    {
      iconUrl: shipping,
      title: "Free Shipping",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas reprehenderit id eum adipisci ea totam neque quidem cumque delectus deserunt aut distinctio, maxime, atque quaerat cum nam quae accusantium consequuntur."
    },
    {
      iconUrl: refund,
      title: "100% REFUND",
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic voluptatem soluta fugit nisi id omnis obcaecati qui aliquid unde, neque doloremque non voluptatibus vero, assumenda minus vel reiciendis maxime nihil.'
    },
    {
      iconUrl: overlay,
      title: "SUPPORT 24/7",
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, repudiandae tenetur? Culpa ipsa magnam aperiam eos! Obcaecati nam molestiae consequatur, suscipit repudiandae doloribus repellat corrupti, perspiciatis asperiores, provident repellendus est.'
    }
  ];
  function renderItems() {
    return info.map((item, index) => {
      return (
        <div className="contact_info_content col-3">
          <div className="info_content_logo">
            <img src={item.iconUrl} alt="logo" />
          </div>
          <div className="info_content_title">
            <h3>{item.title}</h3>
          </div>
          <div className="info_content_text">
            <p>{item.text}</p>
          </div>
        </div>
      );
    });
  }
  return (
    <div className="contact_info container">
      <div className="contact_info_contents">{renderItems()}</div>
    </div>
  );
};

export default Info;
