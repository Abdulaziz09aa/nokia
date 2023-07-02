import React from "react";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs"
import { AiOutlineArrowRight } from "react-icons/ai"
import "./News.css";


function News() {

  const data = [
    {
      title: "ESB Networks and Sigma Wireless deploy national 4G/LTE private mobile network with Nokia in Ireland",
      desc: "1 Jun 2023"
    },
    {
      title: "Nokia announces new 4G and 5G Core Network software solutions critical needs of enterprise verticals",
      desc: "30 May 2023"
    },
    {
        title: "Nokia’s turnkey 5G-connected drone platform selected by Belgium’s Citymesh first nationwide drone network",
        desc: "17 May 2023"
    },
    {
        title: "Nokia and Claro deploy the first industrial-grade private 4.9G wireless network in a maritime terminal in Colombia",
        desc: "9 May 2023"
    },
    {
        title: "Nokia unveils first CE-certified 5G automated drone-in-a-box solution for secure, reliable public sector and industrial operations",
        desc: "2 May 2023"
    },
    {
        title: "Nokia unveils first CE-certified 5G automated drone-in-a-box solution for secure, reliable public sector and industrial operations",
        desc: "8 Mar 2023"
    },
    {
        title: "Nokia bolsters MX Industrial Edge capabilities to meet ever-growing industry digitalization demands #MWC23",
        desc: "22 Feb 2023"
    },
    {
        title: "Nokia unveils first CE-certified 5G automated drone-in-a-box solution for secure, reliable public sector and industrial operations",
        desc: "16 Feb 2023"
    },
    {
        title: "Nokia announces new 4G and 5G Core Network software solutions for mission critical needs of enterprise verticals",
        desc: "6 Feb 2023"
    },
    {
        title: "Nokia and Claro deploy the first industrial-grade private 4.9G wireless network in a maritime terminal in Colombia",
        desc: "6 Dec 2023"
    },
    {
        title: "Nokia unveils first CE-certified 5G automated drone-in-a-box solution for secure, reliable public sector and industrial operations",
        desc: "16 Feb 2023"
    },
]

  return (
        <div className="news">
        <div className="new">
          <h1> Latest news</h1>
          <div className="new__products">
            {
              data?.map((item, inx)=> <div key={inx} className="new__product">
                <p>{item?.desc}</p>
                <h3>{item?.title} <span> <AiOutlineArrowRight/> </span> </h3>
              </div>)
            }
          </div>
        </div>
    </div>

   
  );
}

export default News
