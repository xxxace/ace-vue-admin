// 开发环境下引入mock
if (import.meta.env.VITE_MODE === 'devlopment') {
    import('./setup').then((res) => {
        const { setup } = res.default
        setup()
    })
}
