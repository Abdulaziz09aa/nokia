import React from 'react'
import "./Express.css"
import Enterpresses from '../../components/enterpresses/Enterpresses'
import Degital from '../../components/degital/Degital'
import Topic from '../../components/topic/Topic'
import Meet from '../../components/meet/Meet'
import Solutions from '../../components/solutions/Solutions'
import Techno from '../../components/techno/Techno'
import Insig from '../../components/insig/Insig'
import Network from '../../components/network/Network'

function Express() {
  return (
    <div className='express'>
        <Enterpresses/>
        <Degital/>
        <Topic/>
        <Meet/>
        <Solutions/>
        <Techno/>
        <Insig/>
        <Network/>
    </div>
  )
}

export default Express