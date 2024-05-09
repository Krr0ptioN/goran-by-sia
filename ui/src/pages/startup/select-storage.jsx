import Form from '@/components/form'
import FormHeader from '@/components/form/form-header'
import { CircleStackIcon } from '@heroicons/react/24/outline'

export default function SelectStorage() {
  return (
    <Form>
      <FormHeader
        icon={CircleStackIcon}
        title="Select storage"
        subtitle="If you wanna import a file, please select a file or use."
      />
    </Form>
  )
}
