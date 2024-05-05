import classNames from 'classnames'
import { useCallback } from 'react'
import './range-input.scss'

export default function RangeInput({ className, value, max = 100, onChange }) {
  const onMouseUp = useCallback(
    (e) => {
      const rect = e.target.getBoundingClientRect()
      const x = e.clientX - rect.left

      onChange((max * x) / rect.width)
    },
    [onChange]
  )

  return (
    <div role="slider" className={classNames(className, 'range-input')}>
      <span className="fill" style={{ width: (value * 100) / max + '%' }} />
      <div className="overlay" onMouseUp={onMouseUp} />
    </div>
  )
}
