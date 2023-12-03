const LoginPage=require('../pages/login.page')
describe("Demo tests",()=>{
    it('Login Test',async ()=>{
        browser.url('https://the-internet.herokuapp.com/login')
        await LoginPage.login('tomsmith','SuperSecretPassword')
//         await $('#username').setValue('tomsmith')
//         await $('#password').setValue('SuperSecretPassword!')
//         await $('button[type="submit"]').click()
//         // await $('#flash').getText().toEqual('You logged into a secure area')
//         const el=await $('#flash').getText()
//         expect(el).toHaveTextContaining('You logged into a secure area')
        })
})