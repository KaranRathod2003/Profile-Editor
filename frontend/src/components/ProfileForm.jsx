  import React from 'react'
  import Button from './Button'

  const ProfileForm = (props) => {
    return (
      <>
        <div className='flex-col gap-2 mx-5 my-2 w-2xs p-2 bg-blue-200 rounded'>
          <h4>Name</h4>
          <input name='name' className='bg-green-200 rounded text-xl p-2 outline-none border-none w-full' value={props.name} onChange={props.handleChange} type="text" placeholder='name' />
          <h4>Email</h4>
          <input name='email' className='bg-green-200 rounded text-xl p-2 outline-none border-none w-full' value={props.email} onChange={props.handleChange} type="email" placeholder='email' />
          <h4>Bio</h4>
          <textarea name='bio' className='bg-green-200 rounded text-xl p-2 outline-none border-none w-full' value={props.bio} onChange={props.handleChange} placeholder='Bio...' />
          <div className="flex gap-2 mt-4">
            <Button btnName='Save' onClick={props.handleSave} />
            <Button btnName='Cancel' onClick={props.handleCancel} />
          </div>
        </div>
      </>
    )
  }

  export default ProfileForm