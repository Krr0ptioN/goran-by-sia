import Logo from '@/components/logo'

import classNames from 'classnames'

import './side-bar.scss'

export default function SideBar({ children }) {
  const isSideBarOpen = true

  return (
    <aside className={classNames('side-bar', { open: isSideBarOpen })}>
      <header className="header main">
        <Logo />
      </header>
      {children}
    </aside>
  )
}
