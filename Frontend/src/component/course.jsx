import React from 'react';
import Cards from "./Cards";
import list from "../../public/list.json";
import {Link} from "react-router-dom";
function course() {
  return (
    <div className={`max-w-screen-2xl container mx-auto md:px-20 px-4`}>
      <div className="mt-28 items-center justify-center text-center">
        <h1 className="text-2xl  md:text-4xl">We're delighted to have you <span className="text-pink-500"> Here :)</span></h1>
        <p className="mt-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, assumendo? iste, corrputi? Tempare laudontium repellendus accusamus accusatium sed archotecto adio, nisi expedita aqas quidem nesciunt debits dolore non aspernatur praesentium assumendo sint quibusdam, perspiciatis, explicabo sequl fugiat amet animi eos aut. Nobis quisquam reiciendis sunt quis sed magnam consequatur!</p>
        <Link to ="/">
            <button className="mt-5 bg-pink-500 text-white px-4 py-2 rounded-md  hover:bg-pink-700 duration-300">Back</button>
        </Link>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
        {
          list.map((item)=>
          (
            <Cards key={item.id} item={item}></Cards>
          ))
        }
      </div>
    </div>
  )
}

export default course
