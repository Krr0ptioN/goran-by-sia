import React from 'react'
import useSpeaker from '@/hooks/speaker'
import SpearkerButton from './speaker-button'
import RangeInput from '../range'

import './speaker-controls.scss'

export default function SpeakerControls() {
  const speaker = useSpeaker()

  return (
    <div className="speaker-controls">
      <SpearkerButton />
      <RangeInput value={speaker.volume} onChange={speaker.change} />
    </div>
  )
}
