import moment from 'moment'
import React, { Suspense } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import PageHeader from './header'
import SideBar from '@/components/side-bar'
import LoadingView from '@/components/loading-view'
import { TreeNav } from '@/components/nav'
import { MainMenu, SecondaryMenu } from '@/pages/menu'
import MusicPlayer from './music-player'

import './home.scss'

moment.locale('ku')

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
