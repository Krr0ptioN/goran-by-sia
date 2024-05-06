import React from 'react'
import Button from '@/components/button'
import Spacer from '@/components/spacer'
import UserProfileMenu from '@/components/user/user-profile'

export default function PageHeader() {
  return (
    <header className="page-header">
      <div className="nav">
        <Button icon="ChevronLeft" disabled className="icon" />
        <Button icon="ChevronRight" disabled className="icon" />
      </div>
      <Spacer />
      <UserProfileMenu />
    </header>
  )
}
