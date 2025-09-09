import React from 'react'
import Button from './Button'


const ProfileCard = (props) => {
  return (
    <>
      <div className='flex-col gap-2 mx-5 my-2 w-2xs p-2 bg-green-200 rounded'>
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