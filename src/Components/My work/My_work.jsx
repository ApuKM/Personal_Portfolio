import React from 'react'
import './My_work.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/my_work'
import arrow from '../../assets/arrow.png'

const My_work = () => {
  return (
    <div id='work' className='mywork'>
      <div className="mywork-title">
        <h1>My latest work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((item,index)=>{
          return <img className='work-img' key={index} src={item.w_img} alt="" />
        })}
      </div>
      <div className="mywork-showmore">
        <p>Show more</p>
        <img src={arrow} alt="" />
      </div>
        
    </div>
  )
}

export default My_work