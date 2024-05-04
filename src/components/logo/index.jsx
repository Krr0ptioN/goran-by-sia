import React from 'react'
import classNames from 'classnames'
import { MusicalNoteIcon } from '@heroicons/react/24/solid'
import './logo.scss'

export default function Logo({ className }) {
  return (
    <h1 className={classNames('logo', className)}>
      <MusicalNoteIcon className="icon" />
      <span>Goran&trade;</span>
    </h1>
  )
}
