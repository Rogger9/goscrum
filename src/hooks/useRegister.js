import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAuthData, postAuth } from 'service/auth'
import { v4 as uuidv4 } from 'uuid'
import { REGISTERED } from 'routes'
import swal from 'utils/swal'

export const useRegister = () => {
  const [data, setData] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    getAuthData()
      .then(({ result }) => setData(result))
      .catch(() => swal('error'))
  }, [])

  const onSubmit = ({ switch: swt, teamID, ...dataUser }) => {
    const user = {
      ...dataUser,
      teamID: teamID || uuidv4()
    }

    postAuth('register', { user })
      .then(({ status_code: statusCode, result }) => {
        if (statusCode !== 201) return swal('error')
        navigate(REGISTERED + result?.user.teamID, { replace: true })
      })
      .catch(() => swal('error'))
  }

  return { data, onSubmit }
}
