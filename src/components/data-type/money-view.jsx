import { EUR, EUR_ACCOUNTING } from '@/services/currency'
import classNames from 'classnames'
import './money-view.scss'

export function MoneyView({ value }) {
  return <span className="money-value">{EUR.format(value)}</span>
}

export function AccountingView({ value }) {
  return (
    <span
      className={classNames('accounting-value', {
        credit: value > 0,
        debit: value < 0,
      })}
    >
      {EUR_ACCOUNTING.format(value)}
    </span>
  )
}
