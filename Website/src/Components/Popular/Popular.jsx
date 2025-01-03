import React from 'react'
import './Popular.css'
import Item from '../Item/Item'

const Popular = (props) => {
  return (
    <section id='PopularMen' className='popular'>
      <h1>POPULAR IN MEN</h1>
      <hr />
      <div className="popular-item">
        {props.data.map((item,i)=>{
            return <Item id={item.id} key={i} name={item.name} image={item.image}  new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </section>
  )
}

export default Popular
