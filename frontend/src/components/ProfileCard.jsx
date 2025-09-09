import React from 'react'
import Button from './Button'


const ProfileCard = (props) => {
  return (
    <>
      <div className='flex-col gap-2 mx-5 my-2 w-2xs p-2 bg-green-200 rounded'>
        <div className='flex items-center justify-center'>
            <img className='w-20 h-20 object-fill rounded-full' src="https://images.unsplash.com/photo-1620288627223-53302f4e8c74?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="avataar" />
        </div>
        <h4>Name</h4>
        <h1 className='text-xl bg-blue-200 p-2 rounded'>{props.name}</h1>
        <h4>Email</h4>
        <h1 className='text-xl bg-blue-200 p-2 rounded'>{props.email}</h1>
        <h4>Bio</h4>
        <h1 className='text-xl bg-blue-200 p-2 rounded'>{props.bio}</h1>
        <div className='mt-4'>
          <Button btnName='Edit' onClick={props.handleEdit} />
        </div>
      </div>
      
    </>
  )
}

export default ProfileCard