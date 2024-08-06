import { Then } from "@wdio/cucumber-framework";
import * as chai from "chai";
import logger from "../../helper/logger.ts"
import {CustomWorld} from "../step-definitions/world.ts" 

Then(/^Inventory page should list (.*)$/, async function (this: CustomWorld,noOfProducts) {
  /**Getting the number of products list */
  console.log(`>>Starting Test id: ${this.testid}`);
  // console.log(`>>>The appid is: ${this.appid}`);
  if (!noOfProducts)
    throw Error(`Invalid product count provided: ${noOfProducts}`);
  let eleArr = await $$(`.inventory_item_name`);
  chai.expect(eleArr.length).to.equal(parseInt(noOfProducts));
  console.log(`>>Array length: ${eleArr.length}`);
});
/**
 * Steps:
 * 1. Get price list
 * 2. Convert string to number
 * 3. Assert if any value is <=0
 */
Then(/^Validate all products have valid price$/, async function () {
  logger.info(`${this.testid}: Checking the price...`)
  /**1. Get price list */
  let eleArr = await $$(`.inventory_item_price`);
  let priceStrArr = [];
  for (let i = 0; i < eleArr.length; i++) {
    let priceStr = await eleArr[i].getText();
    priceStrArr.push(priceStr);
  }
  console.log(`>>Price with $: ${priceStrArr}`);

  /**2. Convert string to number*/
  let priceNumArr = priceStrArr.map((ele) => +ele.replace("$", ""));
  console.log(`>> Price in numbers: ${priceNumArr}`);

  /**3. Assert if any value is <=0 */
  let invalidPriceArr = priceNumArr.filter(ele => (ele <= 0));
  chai.expect(invalidPriceArr.length).to.equal(0);
  // await browser.debug()
});


//API INTEGRATION
Then(/^Verify if all users exist in customers list$/, async function(){
  
})