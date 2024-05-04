import { useState } from 'react'
import Button from '@/components/button'
import Form from '@/components/form'
import FormBody from '@/components/form/form-body'
import FormFooter from '@/components/form/form-footer'
import FormHeader from '@/components/form/form-header'
import { PasswordInput, TextInput } from '@/components/input'
import { UserPlusIcon } from '@heroicons/react/24/outline'

export default function RegisterPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <Form>
      <FormHeader
        icon={UserPlusIcon}
        title="Sign-Up"
        subtitle="Please fill the following infomration."
      />
      <FormBody>
        <TextInput
          placeholder="Username"
          value={username}
          onChange={setUsername}
        />
        <TextInput
          placeholder="Your full"
          value={username}
          onChange={setUsername}
        />
        <PasswordInput
          placeholder="Password"
          value={password}
          onChange={setPassword}
        />

        <PasswordInput
          placeholder="Re-enter Password"
          value={password}
          onChange={setPassword}
        />
      </FormBody>
      <FormFooter>
        <Button className="w-full">Register</Button>
        <p className="links">
          <a href="/login">Already have an account? try to sign-in</a>
          <a href="/privacy-policy">Privacy policy</a>
        </p>
      </FormFooter>
    </Form>
  )
}
