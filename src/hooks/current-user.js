import { useGetUserProfileQuery } from '@/services/api/auth'

export default function useCurrentUser() {
  const { data } = useGetUserProfileQuery()

  return data
}
