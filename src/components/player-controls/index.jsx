import React from 'react'
import Button from '../button'
import './player-controls.scss'

export default function PlayerControls() {
  return (
    <div className="player-controls">
      <Button disabled icon="ArrowsRightLeft" />
      <Button disabled icon="ChevronLeft" />
      <Button className="play" icon="SolidPlayCircle" />
      <Button disabled icon="ChevronRight" />
      <Button icon="ArrowPath" />
    </div>
  )
}
