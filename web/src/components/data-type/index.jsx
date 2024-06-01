import React, { useMemo } from 'react'

import CountrySelector from '@/components/input/country-selector'
import AddressInput from '@/components/input/address'
import { EmailInput, MultiLineTextInput, TextInput } from '@/components/input'
import Selector from '@/components/selector'
import AddressView from '@/components/data-table/address-view'
import DateView, { CloseDateView } from '@/components/data-table/date-view'
import Icon from '@/components/icon'
import { AccountingView, MoneyView } from '@/components/data-type/money-view'

function InvalidDataType({ dataType }) {
  return (
    <div className="flex gap-2 bg-red-100 p-2 rounded">
      Data type <pre>{dataType}</pre> is not supported.
    </div>
  )
}

function IdInput({ immutable = false, ...rest }) {
  if (immutable) return <TextInput readOnly {...rest} />
  return <TextInput {...rest} />
}

const RawView = ({ value }) => value

const IdView = ({ value }) => <code>{value}</code>
const EnumView = ({ value, options = [] }) => {
  const option = options.find((it) => it.id === value) || { value }
  return (
    <span className="enum" data-id={value}>
      {option.icon && <Icon name={option.icon} />}
      {option.value}
    </span>
  )
}

const DataTypeConfig = {
  id: { editor: IdInput, view: IdView },
  text: { editor: TextInput, view: RawView },
  accounting: { view: AccountingView },
  money: { view: MoneyView },
  date: { view: DateView },
  recentDate: { view: CloseDateView },
  description: { editor: MultiLineTextInput, view: RawView },
  country: { editor: CountrySelector, view: RawView },
  city: { editor: TextInput, view: RawView },
  email: { editor: EmailInput, view: RawView },
  zip: { editor: TextInput, view: RawView },
  enum: { editor: Selector, view: EnumView },
  address: { editor: AddressInput, view: AddressView },
  unsupported: { editor: InvalidDataType, view: InvalidDataType },
}

export function useDataTypeConfig(dataType) {
  return useMemo(() => {
    if (typeof dataType === 'object') {
      return dataType
    }
    if (typeof dataType === 'string') {
      return DataTypeConfig[dataType] || DataTypeConfig.unsupported
    }
    return DataTypeConfig.unsupported
  }, [dataType])
}

export function DataTypeInput({ dataType, ...props }) {
  const Input = useDataTypeConfig(dataType).editor

  return <Input {...props} />
}

function DefaultView({ dataType, value }) {
  return `${value} - [${dataType}]`
}

export function View({ dataType = 'text', value, ...props }) {
  const CView = useDataTypeConfig(dataType)?.view || DefaultView

  return <CView dataType={dataType} value={value} {...props} />
}
