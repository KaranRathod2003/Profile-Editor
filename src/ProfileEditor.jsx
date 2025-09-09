  import React, { useState } from 'react'
  import ProfileCard from './components/ProfileCard'
  import ProfileForm from './components/ProfileForm'
  import Alert from '@mui/material/Alert';
import { Snackbar } from '@mui/material';



  const ProfileEditor = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [profileData, setProfileData] = useState({
      name: 'Your Name',
      email: 'Your Email',
      bio: 'Your Bio...'
    })
    const [alert, setAlert] = useState({
      open:false,
      message:"",
      type:""
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
    // const handleName = (e) =>{
    //   setProfileData({
    //     ...profileData,
    //     name:e.target.value
    //   })
    // }
    // const handleEmail = (e) =>{
    //   setProfileData({
    //     ...profileData,
    //     email:e.target.value
    //   })
    // }
    // const handleBio = (e) =>{
    //   setProfileData({
    //     ...profileData,
    //     bio:e.target.value
    //   })
    // }




    const handleClose = () =>{
      setAlert({...alert, open:false})
    }
    const handleEdit = () => {
      setBackupProfileData(profileData)
      setIsEditing(true)
    }
    const handleSave = () => {
      // setProfileData()
      setIsEditing(false)
      setAlert({ open: true, type: "success", message: "Profile updated successfully!" });
    }
    const handleCancel = () => {
      setProfileData(backupProfileData)
      setIsEditing(false)
      setAlert({ open: true, type: "info", message: "Edits discarded" });
    }
    return (
      <>
        {isEditing ? <ProfileForm handleChange = {handleChange} name = {profileData.name} email={profileData.email} bio={profileData.bio} handleCancel={handleCancel} handleSave={handleSave} /> : <ProfileCard name={profileData.name} email={profileData.email} bio={profileData.bio} handleEdit={handleEdit} />}
        <Snackbar 
          open = {alert.open}
          autoHideDuration={3000}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          onClose={handleClose}
        >
          <Alert
          onClose={handleClose} 
          severity={alert.type}
          sx={{ width: '100%' }}
          >
            {alert.message}

          </Alert>
        </Snackbar>
      </>
    )
  }

  export default ProfileEditor