import { config as baseconfig} from "../wdio.conf.ts"  //getting out from config to root
export const config = Object.assign(baseconfig,{  //method used to merge to base conf, merging
    //All Test env specific key value pairs
    environment: "TEST",
    sauceDemoUrl: "https://www.saucedemo.com/v1/index.html",
    reqresBaseUrl: "https://reqres.in"
});