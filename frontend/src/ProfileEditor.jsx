  import React, { useState } from 'react'
  import ProfileCard from './components/ProfileCard'
  import ProfileForm from './components/ProfileForm'

  const ProfileEditor = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [profileData, setProfileData] = useState({
      name: 'Your Name',
      email: 'Your Email',
      bio: 'Your Bio...'
    })
    const [backupProfileData, setBackupProfileData] = useState(profileData);

// single function for all change
    const handleChange = (e) =>{
      const key = e.target.name;
      const value = e.target.value;
      setProfileData({
        ...profileData,
        [key] : value
      })
    }



    // seperately handling each change name
    const handleName = (e) =>{
      setProfileData({
        ...profileData,
        name:e.target.value
      })
    }
    const handleEmail = (e) =>{
      setProfileData({
        ...profileData,
        email:e.target.value
      })
    }
    const handleBio = (e) =>{
      setProfileData({
        ...profileData,
        bio:e.target.value
      })
    }





    const handleEdit = () => {
      setBackupProfileData(profileData)
      setIsEditing(true)
    }
    const handleSave = () => {
      // setProfileData()
      setIsEditing(false)
    }
    const handleCancel = () => {
      setProfileData(backupProfileData)
      setIsEditing(false)
    }
    return (
      <>
        {isEditing ? <ProfileForm handleChange = {handleChange} name = {profileData.name} email={profileData.email} bio={profileData.bio} handleCancel={handleCancel} handleSave={handleSave} /> : <ProfileCard name={profileData.name} email={profileData.email} bio={profileData.bio} handleEdit={handleEdit} />}
      </>
    )
  }

  export default ProfileEditor