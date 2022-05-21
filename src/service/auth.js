const { REACT_APP_API_ENDPOINT: API_ENDPOINT } = process.env

export const getAuthData = () => {
  return window.fetch(`${API_ENDPOINT}auth/data`)
    .then(res => res.json())
}

export const postAuth = (path, data) => {
  return window.fetch(`${API_ENDPOINT}auth/${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
}
