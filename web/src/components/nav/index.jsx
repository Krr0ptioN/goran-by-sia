import List from '@/components/list'

import { useState } from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import Icon from '@/components/icon'
import './nav.scss'

function TreeItem({
  id,
  value,
  current,
  icon,
  openIcon,
  openByDefault,
  items = [],
  mapper,
}) {
  const selected = id === current
  const [open, toggle] = useState(openByDefault)

  return (
    <li className={classNames({ open })}>
      <label className={classNames({ selected })}>
        {items?.length > 0 && (
          <Icon
            name={open ? 'ChevronDown' : 'ChevronRight'}
            className="toggle"
            onClick={(e) => {
              e.stopPropagation()
              toggle((i) => !i)
            }}
          />
        )}
        <Link className="link" to={id}>
          <Icon name={(open ? openIcon : icon) || icon} />
          {value}
        </Link>
      </label>
      <List
        view={TreeItem}
        className={classNames('tree-nav', { open })}
        items={items.map(mapper)}
        mapper={mapper}
        current={current}
      />
    </li>
  )
}

export function TreeNav({
  className,
  value,
  mapper = (x) => x,
  title,
  items = [],
  openByDefault,
}) {
  return (
    <List
      className={classNames('tree-nav', className)}
      title={title}
      view={TreeItem}
      current={value}
      mapper={mapper}
      openByDefault={openByDefault}
      items={items.map(mapper)}
    />
  )
}
