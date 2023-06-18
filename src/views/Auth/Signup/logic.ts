import { useCallback } from 'react'
import { signup } from '../../../services/Firebase/auth'
import { useNavigate } from 'react-router-dom'
import { setToken } from '../../../services/storage/token'
import { setUserInfo } from '../../../services/storage/user'
import { updateProfile } from 'firebase/auth'

const useLogic = () => {
  const navigate = useNavigate()
  const handleOnSubmit = useCallback(
    async (values: {
      email: string
      password: string
      displayName: string
      phoneNumber: string
    }) => {
      try {
        const user = await signup(values.email, values.password)
        console.log(user)
        if (user) {
          const token = await user.getIdToken()
          const userInfo = user.providerData
          updateProfile(user, {
            displayName: values.displayName,
          })
          setUserInfo(userInfo)
          setToken(token)
          navigate('/dashboard')
        }
      } catch (error) {
        console.log(error)
      }
    },
    [navigate]
  )

  return { handleOnSubmit }
}

export default useLogic
