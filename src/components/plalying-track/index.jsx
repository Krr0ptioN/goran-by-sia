import usePlayerTrack from '@/hooks/player-track'
import moment from 'moment'
import './playing-track.scss'
import RangeInput from '../range'

export function TimeDuration({ className, seconds }) {
  const duration = moment.duration(seconds, 'seconds')
  return (
    <span className={className}>
      {moment(duration.asMilliseconds()).format('mm:ss')}
    </span>
  )
}

export default function PlayingTrack() {
  const track = usePlayerTrack()

  return (
    <div className="playing-track">
      <TimeDuration className="current" seconds={track.value} />
      <RangeInput
        className="track"
        value={track.value}
        onChange={track.move}
        max={track.size}
      />
      <TimeDuration className="total" seconds={track.size} />
    </div>
  )
}
