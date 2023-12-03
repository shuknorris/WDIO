describe('Demo tests',()=>{
   it('My first Test',async()=>{
    browser.url('https://google.com');
    await $('[name="q"]').setValue('WebdriverIO')
    // await (await $('[name="btnK"]')).click()

    browser.keys('Enter')
    
    browser.pause(2000)
   })
})



