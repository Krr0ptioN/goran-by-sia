import React from 'react'
import useCurrentPlaying from '@/hooks/current-song'
import Icon from '@/components/icon'
import Button from '@/components/button'
import './music-player.scss'

function AlbumArt({ albumArt, title, artist, favorite = false }) {
  return (
    <div className="album-art">
      <img src={albumArt} />
      <div>
        <strong>{title}</strong>
        <span>{artist}</span>
      </div>
      <Icon name={favorite ? 'SolidHeart' : 'Heart'} />
    </div>
  )
}

function Player() {
  return (
    <div className="player">
      <div className="contorls">
        <Button icon="ArrowsRightLeft" />
        <Button icon="ChevronLeft" />
        <Button className="play" icon="SolidPlayCircle" />
        <Button icon="ChevronRight" />
        <Button icon="ArrowPath" />
      </div>
      <div className="progress-bar">
        <span className="current">2:49</span>
        <progress value={70} max={100} />
        <span className="total">3:37</span>
      </div>
    </div>
  )
}

export default function MusicPlayer() {
  const song = useCurrentPlaying()
  return (
    <div className="music-player">
      <AlbumArt {...song} />
      <Player {...song} />
      <div className="extra-controls">
        <Button icon="Bars4" />
        <Button icon="ComputerDesktop" />
        <Button icon="SpeakerWave" />
        <progress value={90} max={100} />
      </div>
    </div>
  )
}
