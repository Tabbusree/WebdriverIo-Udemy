import {Given,Then} from '@wdio/cucumber-framework'
import { expect, $ } from '@wdio/globals'


Given(/^I open the website and load the url (.+)$/, async function(homepageurl){
   await browser.url(homepageurl)
   await browser.maximizeWindow()
})

Then(/^I should see a header with text (.+)$/, async function(headertext){
    const header = await $('.heading')
    expect(await header.getText()).toEqual(headertext)
})