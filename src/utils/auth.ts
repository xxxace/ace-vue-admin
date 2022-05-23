const TOKEN_KEY = 'token'

const isLogin = () => {
    const token = getToken()
    return !!token
}

const getToken = () => {
    const token = localStorage.getItem(TOKEN_KEY)
    return token
}

const setToken = (token: string) => {
    localStorage.setItem(TOKEN_KEY, token)
}

const removeToken = () => {
    localStorage.removeItem(TOKEN_KEY)
}

export { isLogin, getToken, setToken, removeToken }