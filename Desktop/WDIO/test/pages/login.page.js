class LoginPage{
    get usernameTextBox(){
        return $('#username')
    }
    get passwordTextBox(){
        return $('#password')
    }
    get loginButton(){
        return $('button[type="submit"]')
    }
    get message(){
        return $('#flash')
    }
    async login(username,password){
        await this.usernameTextBox.setValue(username)
        await this.passwordTextBox.setValue(password)
        await this.loginButton.click
    }
    async checkMessage(msg){
        const el=await $(this.Message).getText()
        expect(el).toHaveTextContaining(msg)
    }
}
module.exports= new LoginPage