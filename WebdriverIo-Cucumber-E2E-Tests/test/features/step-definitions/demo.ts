import {Given} from "@wdio/cucumber-framework"

Given(/^Google page is opened$/, function(){
    browser.url("https://www.google.com")
    browser.pause(100000)
})