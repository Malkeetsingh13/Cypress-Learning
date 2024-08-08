import { registerPage } from "../../pages/registerPage"
const registerObj = new registerPage()
import registerData from '../../fixtures/registerData.json'

describe('test automation', ()=> {

it('register flow', ()=>{

    registerObj.openURL()
    registerObj.enterFirstName(registerData.firstName) // Here we are passing the data from registerdata json file in fixtures
    registerObj.enterLastName(registerData.lastname)
    registerObj.enterEmail(registerData.email)
    registerObj.enterTelephone(registerData.telephone)
    registerObj.enterPassword(registerData.password)
    registerObj.selectCheckbox()
    registerObj.clickonContinue()


})
})