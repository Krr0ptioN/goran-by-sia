import './user-profile.scss'
import { useGetUserProfileQuery } from '@/services/api/auth'
import Icon from '../icon'

export default function UserProfileMenu() {
  const { data: user, isLoading } = useGetUserProfileQuery()
  return (
    <div className="user-menu">
      <img src={user?.profileImage} />
      <label>{user?.username}</label>
      <Icon name="ChevronDown" />
    </div>
  )
}
