import classNames from 'classnames'
import React, { useMemo, useState } from 'react'
import { EUR } from '@/services/currency'
import './input.scss'

export default function Input({ className, type, ...props }) {
  return (
    <input type={type} className={classNames('input', className)} {...props} />
  )
}

export function TextInput({
  type = 'text',
  className,
  value,
  onChange,
  ...props
}) {
  return (
    <Input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={className}
      {...props}
    />
  )
}

export function MultiLineTextInput({
  className,
  value,
  rows = 3,
  onChange,
  ...props
}) {
  return (
    <textarea
      rows={rows}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={classNames('input', className)}
      {...props}
    />
  )
}

export function EmailInput({ className, value, onChange, ...props }) {
  return (
    <Input
      type="email"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={className}
      {...props}
    />
  )
}

export function PasswordInput({ className, value, onChange, ...props }) {
  return (
    <Input
      type="password"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={className}
      {...props}
    />
  )
}

export function MoneyInput({ className, value, onChange, Currency = EUR }) {
  const [edit, setEdit] = useState(false)
  const id = useMemo(() => 'txt_' + Math.random().toString(16), [])

  return (
    <div className={classNames('money-input', className, { edit })}>
      <TextInput
        id={id}
        type="money"
        value={value}
        onChange={onChange}
        onFocus={(_) => setEdit(true)}
        onBlur={(_) => setEdit(false)}
      />
      <label htmlFor={id}>{Currency.format(value)}</label>
    </div>
  )
}
