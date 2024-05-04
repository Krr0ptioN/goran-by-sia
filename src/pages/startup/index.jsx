import { CopyrightFooter } from '@/components/copyright'
import Logo from '@/components/logo'
import { Outlet } from 'react-router-dom'
import './startup.scss'

export default function StartupPage() {
  return (
    <div className="startup page">
      <Logo />
      <Outlet />
      <CopyrightFooter />
    </div>
  )
}
