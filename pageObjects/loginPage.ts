import {Page,Locator,test} from "@playwright/test";
import { BasePage } from "./basePage";

export class LoginPage extends BasePage {

    readonly userNameInputField: Locator;
    readonly passwordInputField: Locator;
    readonly loginButton: Locator;

    constructor(page:Page) {
        super(page);
        this.userNameInputField = page.locator("#username");
        this.passwordInputField = page.locator("#password");
        this.loginButton = page.locator("#Login")
    }
 
    public async doLogin(username:string, password:string){
        await this.fillIn(this.userNameInputField,username);
        await this.fillIn(this.passwordInputField,password);
        await this.click(this.loginButton);
        await this.page.waitForLoadState('load');
    }

}