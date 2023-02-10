import React from 'react'
import AdminArticles from '../adminArticles/AdminArticles'
import '../profileRenderer/profileRenderer.scss'
import UserHistory from '../userHistory/UserHistory'
import UserProfileTab from '../userProfileTab/UserProfileTab'

function ProfileRenderer(props) {
  const { user, profileCategory, currentCateg, language } = props
  //============================

  //method which renders admin tabs
  const AdminRenderer = () => {
    switch (profileCategory['admin'][0][currentCateg]) {
      case 'articles':
        return <AdminArticles />
      default:
        return <></>
    }
  }

  //method which renders users tabs
  const UserRenderer = () => {
    switch (profileCategory['user'][0][currentCateg]) {
      case 'profile':
        return <UserProfileTab />
      case 'history':
        return <UserHistory />
      default:
        return <></>
    }
  }

  return <>{user.data.role === 'user' ? <UserRenderer /> : <AdminRenderer />}</>
}

export default ProfileRenderer