import moment from 'moment'
import 'moment/locale/de'
import React, { Suspense } from 'react'

import Button from '@/components/button'
import LoadingView from '@/components/loading-view'
import { TreeNav } from '@/components/nav'
import SideBar from '@/components/side-bar'
import { MainMenu, SecondaryMenu } from '@/pages/menu'
import { Outlet, useLocation } from 'react-router-dom'
import Spacer from '@/components/spacer'
import MusicPlayer from './music-player'
import useCurrentUser from '@/hooks/current-user'
import UserProfileMenu from '@/components/user/user-profile'

import './home.scss'

moment.locale('ku')

function PageHeader() {
  const user = useCurrentUser()

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

export default function HomePage() {
  const { pathname } = useLocation()

  return (
    <div className="page home">
      <div className="content">
        <SideBar>
          <TreeNav value={pathname} items={MainMenu} />
          <span className="distance" />
          <TreeNav value={pathname} items={SecondaryMenu} />
          <a href="#">Zaniyarî ziyatir wer gire</a>
        </SideBar>
        <div className="outlet">
          <PageHeader />
          <Suspense fallback={<LoadingView />}>
            <Outlet />
          </Suspense>
        </div>
      </div>
      <MusicPlayer />
    </div>
  )
}
