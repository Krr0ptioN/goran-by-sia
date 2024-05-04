import Button from '@/components/button'
import Form from '@/components/form'
import FormBody from '@/components/form/form-body'
import FormFooter from '@/components/form/form-footer'
import FormHeader from '@/components/form/form-header'
import { TextInput } from '@/components/input'
import { LockClosedIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

export default function ResetPasswordPage() {
  const [username, setUsername] = useState('')

  return (
    <Form>
      <FormHeader
        icon={LockClosedIcon}
        title="Recover your password"
        subtitle="Please enter your username and we send you a recovery link."
      />
      <FormBody>
        <TextInput
          placeholder="Username"
          value={username}
          onChange={setUsername}
        />
      </FormBody>
      <FormFooter>
        <Button className="w-full">Recover password</Button>
      </FormFooter>
    </Form>
  )
}
