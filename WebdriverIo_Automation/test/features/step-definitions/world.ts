import { setWorldConstructor } from "@wdio/cucumber-framework";

//World obj is used to exchange data between steps
class CustomWorld {
    testid:string
    appid:string
  constructor() {
    this.testid = "",
    this.appid = ""
  }
}
setWorldConstructor(CustomWorld);
export { CustomWorld };