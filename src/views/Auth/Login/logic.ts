import { useCallback } from 'react'
import { login } from '../../../services/Firebase/auth'
import { useNavigate } from 'react-router-dom'
import { setToken } from '../../../services/storage/token'
import { setUserInfo } from '../../../services/storage/user'

const useLogic = () => {
    const navigate = useNavigate()
    const handleOnSubmit = useCallback(
        async (values: { email: string; password: string }) => {
            try {
                const user = await login(values.email, values.password)
                console.log(user)
                if (user) {
                    const token = await user.getIdToken()
                    const userInfo = user.providerData
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
