import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f]  flex justify-center items-center p-4' aria-label='Contact Me Form'>
        <form method='POST' action='https://getform.io/f/amddzqqb' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-orange-700 text-gray-300'>Contacts</p>
                <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email - c.hsiang.su@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type='text' placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type='email' placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name='message' rows='10' placeholder='Message' />
            <button className='text-white border-2 hover:bg-orange-700 hover:border-orange-700 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact