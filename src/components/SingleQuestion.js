import React, {useState} from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

const SingleQuestion = ({title, info}) => {

    const [toggle, setToggle] = useState(false)

  return (
    <article className='my-5 p-3 border-2 border-gray-300 rounded-md shadow-md'>
        <header className="flex justify-between">
            <h4 className='text-xl font-medium py-2'>{title}</h4>
            <button onClick={() => setToggle(!toggle)} className='rounded-full bg-gray-300 h-8 w-8 flex justify-center items-center min-w-8 ml-4 text-red-800'>{toggle? <AiOutlineMinus /> : <AiOutlinePlus />}</button>
        </header>
        {toggle? <p className='w-[90%]'>{info}</p> : ""}
    </article>
  )
}

export default SingleQuestion