import React from 'react'
import List from '../list'
import Section from '../section'
import SongItem from './song-item'
import './playlist.scss'

const LABELS = {
  'recently-played': 'Diwayîn giwê dirawekan',
}

export default function Playlist({ name, title, items = [], system = false }) {
  return (
    <Section
      className="playlist"
      key={name}
      title={system ? LABELS[name] : title}
    >
      <List view={SongItem} items={items} className="music-list" />
    </Section>
  )
}
