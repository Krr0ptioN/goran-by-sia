import React from 'react'
import Button from '../button'
import usePlayerTrack from '@/hooks/player-track'
import './player-controls.scss'

export default function PlayerControls() {
  const player = usePlayerTrack()

  return (
    <div className="player-controls">
      <Button disabled icon="ArrowsRightLeft" />
      <Button disabled icon="ChevronLeft" />
      <Button
        disabled={!player.active}
        className="play"
        icon={player.playing ? 'SolidPauseCircle' : 'SolidPlayCircle'}
        onClick={player.toggle}
      />
      <Button disabled icon="ChevronRight" />
      <Button icon="ArrowPath" />
    </div>
  )
}
