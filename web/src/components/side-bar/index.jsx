import Logo from '@/components/logo'
import { KurdishSymbolA, KurdishSymbolD } from '../symbol'

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
      <div className="watermark">
        <KurdishSymbolA />
        <KurdishSymbolA />
        <KurdishSymbolA />
        <KurdishSymbolA />

        <KurdishSymbolD />
        <KurdishSymbolD />
        <KurdishSymbolD />
        <KurdishSymbolD />

        <KurdishSymbolA />
        <KurdishSymbolA />
        <KurdishSymbolA />
        <KurdishSymbolA />
      </div>
    </aside>
  )
}
