const conta = {
    email: 'teste@teste.com',
    password: '123456',
    name: 'igor'
}

export const api = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(conta)
    },3000)
})