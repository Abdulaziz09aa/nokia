import React from 'react'
import "./Techno.css"
import { AiOutlineArrowRight } from "react-icons/ai"

function Techno() {

    const data = [
        {
            url: "https://www.nokia.com/sites/default/files/styles/c1_reference/public/2023-05/solar-panels.png",
            title: "Core Enterprise Solutions"
        },
        {
            url: "https://www.nokia.com/sites/default/files/styles/c1_reference/public/2021-05/1_1_1920x500.jpg",
            title: "Optical LAN"
        },
        {
            url: "https://www.nokia.com/sites/default/files/styles/c1_reference/public/2019-03/Screenshot_2_21.png.jpg",
            title: "Mission-critical backhaul for the broadband and IoT era"
        },
        {
            url: "https://www.nokia.com/sites/default/files/styles/c1_reference/public/2020-11/GettyImages-641480100_V2.jpg",
            title: "Microwave transmission"
        },
        {
            url: "https://www.nokia.com/sites/default/files/styles/c1_reference/public/2022-10/nokia_private_wireless_1920x1080.jpg",
            title: "Embrace Industry 4.0 with private wireless"
        },

    ]

  return (
    <div className='technos'>
        <h1>Explore our solutions for enterprises and government</h1>
        <div className="techno__products">
            {
                data?.map((item, inx)=> <div key={inx} className='techno__pro'>
                    <img src={item?.url} alt="" />
                    <h3>{item?.title} <span> <AiOutlineArrowRight/> </span> </h3>
                </div>)
            }
        </div>
    </div>
  )
}

export default Techno