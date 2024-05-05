import React from 'react'
import useSpeaker from '@/hooks/speaker'
import Button from '../button'

export default function SpearkerButton() {
  const speaker = useSpeaker()
  return (
    <Button
      icon={speaker.muted ? 'SpeakerXMark' : 'SpeakerWave'}
      onClick={speaker.toggle}
    />
  )
}
