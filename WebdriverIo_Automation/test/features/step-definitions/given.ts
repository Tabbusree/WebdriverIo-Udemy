import { Given } from "@wdio/cucumber-framework";
// import * as chai from "chai";
import logger from "../../helper/logger.ts"
import {CustomWorld} from "../step-definitions/world.ts" 
// import constants from "../../../data/constants.json" assert { type: 'json' };
// import apiHelper from "../../helper/apiHelper.ts";
// import fs from "fs"

Given(/^Login to inventory web application$/, async function (this: CustomWorld) {
  /**1. Launching the inventory app */

  logger.info(`${this.testid}: Started to login sauce demo app...`)
  console.log(`>>Given step Test id: ${this.testid}`);
  // await browser.url("https://www.saucedemo.com/v1/index.html");
  //Instead of hardcoding we can pass the url from the test env here
  //since sauseDemoUrl is not from webdriverio
  //@ts-ignore
  await browser.url(browser.options.sauceDemoUrl)
  //Print it once to check what are the values coming along with the updated values
  //This will ignore the error on config
  //@ts-ignore
  // console.log(`>>Test config values: ${JSON.stringify(browser.options)}`);
  await browser.maximizeWindow();
  //   // await browser.setTimeout({implicit:15000, pageLoad:10000})     //Added in conf file

  //   /**2. Login the inventory app */
  //   await $(`#user-name`).setValue("standard_user");
  //   await $(`#password`).setValue("secret_sauce");
  //   await $(`#login-button`).click();

  //   let assert_val = await $(`//div[@class="product_label"]`);
  //   let assert_ele = await assert_val.getText();
  //   chai.expect(assert_ele).to.equal("Products");

  //For Reload
  /**2. Login the inventory app */
  //   await $(`#user-name`).setValue("standard_user");
  //   await $(`#password`).setValue("secret_sauce");
  //   await $(`#login-button`).click();

  //   /**Login to another
  //    * Using reload method
  //    */
  //   await browser.pause(2000);
  //   await browser.reloadSession();
  //   await browser.url("https://www.saucedemo.com/v1/index.html");
  //   await browser.maximizeWindow();
  //   await $(`#user-name`).setValue("problem_user");
  //   await $(`#password`).setValue("secret_sauce");
  //   await $(`#login-button`).click();

  //For refresh
  /**2. Login the inventory app */
  try {
    await $(`#user-nam`).setValue(process.env.TEST_STD_USERNAME);
    await $(`#password`).setValue(process.env.TEST_STD_PASSWORD);
    await $(`#login-button`).click();
  } catch (err) {
    console.log(`Error in first login. Retrying...`);
    await browser.refresh();
    await browser.pause(2000);
    await $(`#user-name`).setValue(process.env.TEST_STD_USERNAME);
    await $(`#password`).setValue(process.env.TEST_STD_PASSWORD);
    await $(`#login-button`).click();
  }
  // await browser.back()
  // await browser.pause(2000)
  // await browser.forward()
  // await browser.debug();

  this.appid = "ABC123"
});

//API INTEGRATION
/**Get list of users from reqres api
 * Sub-tasks:
 * 1. Get payload data
 * 2. Make get call using API helper
 * 3. Store results
 */
// Given(/^Get list of (.*) from reqres.in$/, async function (endPointsRef) {
//   if (!endPointsRef)
//     throw Error(`Given endpoint ref: ${endPointsRef} is not valid`);

//   try {
//     /**1. Get payload data */
//     let endpoint = "";
//     if (endPointsRef.trim().toUpperCase() === "USERS") {
//       endpoint = constants.REQRES.GET_USERS;
//     }
//     if (!endpoint)
//       throw Error(`Error getting endpoint: ${endpoint} from the constants.json`);
  
//     /**2. Make get call using API helper */
//     let response
//     await browser.call(async function(){
//       //@ts-ignore
//       response= await apiHelper.GET(browser.Config.reqresBaseUrl,endpoint,"",constants.REQRES.QUERY_PARAM)
//     })
//     //@ts-ignore
//     if(response.status !== 200) chai.expect.fail(`Failed getting users from : ${browser.Config.reqresBaseUrl}/${endpoint}`)
  
//       /**3. Store results */
//       let data = JSON.stringify(response.body, undefined, 4)
//       let filename = `${process.cwd()}/data/api-response/reqresAPIUsers.json`
//       fs.writeFileSync(filename,data)
//   } catch (err) {
//     err.message`Failed at getting API Users from reqres, ${err.message}`
//     throw err
//   }

// })
