import React from 'react'
import useCurrentPlaying from '@/hooks/current-song'
import Icon from '@/components/icon'
import Button from '@/components/button'
import SpeakerControls from '@/components/speaker'
import PlayingTrack from '@/components/plalying-track'
import PlayerControls from '@/components/player-controls'

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
      <PlayerControls />
      <PlayingTrack />
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
        <SpeakerControls />
      </div>
    </div>
  )
}
