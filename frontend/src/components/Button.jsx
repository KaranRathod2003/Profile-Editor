import React from 'react'

const Button = (props) => {
  return (
    <>
    <button onClick={props.onClick} className='px-3 py-2 rounded bg-blue-300 hover:bg-blue-500 text-white font-bold '>
      {props.btnName}
    </button>
    </>
  )
}

export default Button