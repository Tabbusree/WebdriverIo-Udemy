import {Given,Then,When} from '@wdio/cucumber-framework'
import { expect, $ } from '@wdio/globals'

Given('I am in registration page {string}', async function (appurl:string) {
   await browser.maximizeWindow()
   await browser.url(appurl)
  });

Then('I validate page header {string}', async function (headertext:string) {
    const header = $('//h4')
    await expect(header).toHaveText(headertext)
});

When('I enter firstName and lastName', async function (fname:string, lname:string) {
    const fname_element = $('[placeholder="First Name"]')
    const lname_element = $('[placeholder="Last Name"]')

    await(await fname_element).setValue(fname)
    await (await lname_element).setValue(lname)

});

When('I enter userName and password ', async function (uname:string, password:string) {
    const uname_element = $('[placeholder="UserName"]')
    const password_element = $('[placeholder="Password"]')

    await(await uname_element).setValue(uname)
    await(await password_element).setValue(password)

});

When('I click the checkbox', async function (checkBox:string) {
    const checkbox = $('[class="recaptcha-checkbox-border"]')
    await(await checkbox).click()
});

When('I click the Register button', async function (registration:string) {
    const  register_button = $('#register')
    await(await register_button).click()
});


Then('I validate the Registration message', function () {
    
});