import React from 'react'
import * as api from "../../api";

function Test() {
  const onClick=(e)=>{
    e.preventDefault()
    console.log("click");
    (async function () {
      try {
        const { data } = await api.getUser();
        console.log("this is tge our.....",data);
      } catch (error) {
        throw new error(error.response.data.message);
      }
    })();
  }



  return (
    <div>
      <h1>heeeee</h1>
      <button onClick={onClick}>clickme</button>
    </div>
  )
}

export default Test