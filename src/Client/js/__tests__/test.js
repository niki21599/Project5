import {daysLeft} from ".././app.js";
import {updateData} from ".././app.js";
import {updateUi} from ".././app.js";


const regeneratorRuntime = require("regenerator-runtime")


test("daysLeft defined", async () =>{
  expect(daysLeft).toBeDefined()
})

test("updateData defined", async () =>{
  expect(updateData).toBeDefined()
})

test("updateUi defined", async () =>{
  expect(updateUi).toBeDefined()
})
