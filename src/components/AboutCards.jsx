import React from 'react'

const AboutCards = (props) => {
  return (
    <div className='flex flex-col text-left border rounded-2xl py-12 px-8'>
        <div>
            <div className='bg-[#00d8ff] inline-flex p-2 rounded-full'>
                {props.icon}
            </div>
            <h3 className='text-xl font-bold py-4'>{props.heading}</h3>
            <p>
                {props.text}
            </p>
        </div>
    </div>
  )
}

export default AboutCards