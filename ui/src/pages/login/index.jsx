import { PasswordInput, TextInput } from '@/components/input'
import { Fragment, useEffect, useState } from 'react'
import Logo from '@/components/logo'
import Button from '@/components/button'
import { useLoginMutation } from '@/services/api/auth'
import LoginImage from './login.jpg'
import {
  KurdishSymbolA,
  KurdishSymbolB,
  KurdishSymbolC,
} from '@/components/symbol'

import './login.scss'

function Tripple() {
  return (
    <Fragment>
      <KurdishSymbolA />
      <KurdishSymbolB />
      <KurdishSymbolC />
    </Fragment>
  )
}

export default function LoginPage() {
  const [form, setForm] = useState({ username: '', password: '' })
  const [login, result] = useLoginMutation()

  useEffect(() => {
    if (result?.data?.token) {
      location = '/'
    }
  }, [result])

  return (
    <div className="page login-page">
      <aside className="kurd-line">
        <Tripple />
        <Tripple />
        <Tripple />
      </aside>
      <div className="content">
        <form className="login-form">
          <Logo className="large" />
          <p>
            <TextInput
              placeholder="Nêwî Bekarhêner"
              value={form.username}
              onChange={(username) =>
                setForm(({ password }) => ({ username, password }))
              }
            />
          </p>
          <p>
            <PasswordInput
              value={form.password}
              placeholder="Wişey nihênî"
              onChange={(password) =>
                setForm(({ username }) => ({ username, password }))
              }
            />
            <a href="reset-password">
              <small>Wişey nihênît le bîr kirdo?</small>
            </a>
          </p>

          <Button
            className="primary lg"
            label="Çune Jurewe"
            onClick={(_) => login(form)}
          />

          <p className="register">
            Hêsta xot tomar nekirdo? <a href="register">Lêre hejimar bike</a>
          </p>
          <br />
        </form>
        <img src={LoginImage} />
      </div>

      <footer>
        &copy; Hemû mafêk bo
        <a href="https://samalstudios.com"> https://samalstudios.com </a>
        parastirawe.
      </footer>
    </div>
  )
}
