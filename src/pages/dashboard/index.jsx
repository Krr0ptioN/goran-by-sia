import React from 'react'
import List from '@/components/list'
import './dashboard.scss'

function Section({ title, children }) {
  return (
    <section>
      <h1>{title}</h1>
      {children}
    </section>
  )
}

function SongItem({ artist, title, albumArt }) {
  return (
    <li>
      <img src={albumArt} />
      <h1>{title}</h1>
      <span>{artist}</span>
    </li>
  )
}

function MusicList({ items = [] }) {
  return <List view={SongItem} items={items} className="music-list" />
}

const recentlyPlayed = [
  {
    id: 1,
    artist: 'Gelawêj',
    title: 'Kotre Spî',
    albumArt:
      'https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228',
  },
  {
    id: 2,
    artist: 'Şahe Bedo',
    title: 'Zerya',
    albumArt:
      'https://i.scdn.co/image/ab67616d00001e0259e9905101d4a06e2b56341c',
  },
]

const list_1 = [
  {
    id: 3,
    title: 'Beautiful Crazy',
    artist: 'Luke Combs',
    albumArt:
      'https://i.scdn.co/image/ab67616d00001e020601ae73fbc9a0d2a8f8721a',
  },
]

const list_2 = [
  {
    id: 4,
    title: 'Siya Çemame',
    artist: 'Çopî',
    albumArt:
      'https://i.scdn.co/image/ab67616d00001e02c0a23d60e56a19fd97c79b4e',
  },
  {
    id: 5,
    title: 'Yesterday',
    artist: 'StayZee Kurd',
    albumArt:
      'https://i.scdn.co/image/ab67616d00001e029ad816e50e2257a146eef354',
  },
  {
    id: 6,
    title: 'Bîstûme',
    artist: 'Sana Berzencî',
    albumArt:
      'https://i.scdn.co/image/ab67616d00001e02a025c1733ba65835dbfa96e2',
  },
  {
    id: 7,
    title: 'Baran',
    artist: 'Sana Berzencî',
    albumArt:
      'https://i.scdn.co/image/ab67616d00001e0282eac25249c7e29abd3615c4',
  },
  {
    id: 8,
    title: 'Min Êsta',
    artist: 'Bane',
    albumArt:
      'https://i.scdn.co/image/ab67616d00001e029725fb4ee1dd3bdc44a59fe7',
  },
]

export default function Dashbaord() {
  return (
    <div className="page dashboard-page">
      <Section title="Diwayîn giwê dirawekan">
        <MusicList items={recentlyPlayed} />
      </Section>
      <Section title="Goranî Gişt">
        <MusicList items={list_2} />
      </Section>
      <Section title="Siya Çamane">
        <MusicList items={list_1} />
      </Section>
    </div>
  )
}
