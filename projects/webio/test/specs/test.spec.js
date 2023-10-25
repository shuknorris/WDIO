describe("Navigation Menu", () => {
        it("should click on Core & Enterprise Systems link", () => {
          browser.url("https://epam.com"); 
          const coreEnterpriseLink = $(".top-navigation__sub-link[href='/services/engineering/core-and-enterprise-systems']");
          coreEnterpriseLink.click();

        });

        it('Should load the EPAM website', async () => {
                    await browser.url('https://www.epam.com/');
                    const pageTitle = await browser.getTitle();
                    expect(pageTitle).toEqual('EPAM | Software Engineering & Product Development Services');
        });
      
        it("should click on Cloud link", () => {
          browser.url("https://epam.com"); 
          const cloudLink = $(".top-navigation__flyout-item a[href='/services/cloud']");
          cloudLink.click();
       
        });
      
        it("should click on Responsible AI link", () => {
          browser.url("https://epam.com"); 
          const responsibleAILink = $("//a[text()='Responsible AI']");
          responsibleAILink.click();
        
        });
      
        it("should click on Life Sciences & Healthcare link", () => {
          browser.url("https://epam.com"); 
          const lifeSciencesLink = $("//a[text()='Life Sciences & Healthcare']");
          lifeSciencesLink.click();

        });
      });
  
