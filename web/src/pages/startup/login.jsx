import Button from '@/components/button'
import Form from '@/components/form'
import FormBody from '@/components/form/form-body'
import FormFooter from '@/components/form/form-footer'
import FormHeader from '@/components/form/form-header'
import { PasswordInput, TextInput } from '@/components/input'
import { SparklesIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  return (
    <Form onSubmit={() => navigate('/dashboard')}>
      <FormHeader
        icon={SparklesIcon}
        title="Sign-in"
        subtitle="If you have an account, please login to the system using this form."
      />
      <FormBody>
        <TextInput
          placeholder="Username"
          value={username}
          onChange={setUsername}
        />
        <PasswordInput
          placeholder="Password"
          value={password}
          onChange={setPassword}
        />
      </FormBody>
      <FormFooter>
        <Button className="w-full">Login</Button>
        <p className="links">
          <a href="/register">Create an account</a>
          <a href="/recover-password">Have you forgot your password?</a>
        </p>
      </FormFooter>
    </Form>
  )
}
