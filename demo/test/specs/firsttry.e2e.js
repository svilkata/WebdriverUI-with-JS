 describe("ECommerce application", async () => {

    xit("Login Fail Page retry mechanism", async function () {
        this.retries(2);
        await browser.url("/loginpagePractise/");
        console.log(await browser.getTitle);
        await expect(browser).toHaveTitleContaining("Rahul Shetty Academyzzz");
    })

    it("Login Fail Page-Smoke-Sanity", async () => {
        await browser.url("/loginpagePractise/");
        console.log(await browser.getTitle);
        await expect(browser).toHaveTitleContaining("Rahul Shetty Academy");

        // Css selector or Xpath
        await $("#username").setValue("rahulshettyacademy");
        // await browser.pause(3000);
        await $("input[name='username']").setValue("secondRahul");
        // await browser.pause(3000);
        await $("//input[@name='username']").setValue("third Rahul");
        // await browser.pause(3000);

        const password = $("//input[@type='password']");
        await password.setValue("learning");
        await browser.pause(3000);

        await $("#signInBtn").click(); //becomes signing
        // await browser.pause(3000);
        console.log(await $(".alert-danger").getText());
        await browser.waitUntil(async() => await $("#signInBtn").getAttribute('value') === 'Sign In', {
            timeout: 5000,
            timeoutMsg: 'Error message is not showing up'
        });
        await console.log(await $(".alert-danger").getText());

        await expect($("p")).toHaveTextContaining("username is rahulshettyacademy and Password is learning");
    })

    it("Login Success page title", async () => {
        await browser.url("/loginpagePractise/");
        await $("input[name='username']").setValue("rahulshettyacademy");
        const password = $("//input[@type='password']");
        await password.setValue("learning");
        await $("#signInBtn").click(); //becomes signing

        //wait until checkout button is displayed
        await $(".btn-info").waitForExist();
        await expect(browser).toHaveUrlContaining("shop");
    })
})