import React from 'react'
import { useContext } from 'react'
import { ContextStore } from '../context/ContextStore'

const Profile = () => {
    const data = useContext(ContextStore)
  return (
    <div>Profile:{data}</div>
  )
}

export default Profile