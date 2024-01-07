import {test,expect} from "@playwright/test";
import { URLConstants } from "../constants/urlConstants";
import { FrameHelper } from "../utils/frameHelper";
import { EnvConstants } from "../constants/envConstants";
import { LoginPage } from "../pageObjects/loginPage";

test.describe('Salesforce Login', () => {

    test('TC001: Login into salesforce', async({page}) => {
        await page.goto(URLConstants.LOGIN_PAGE);
        await page.waitForLoadState('load');
        const testData = FrameHelper.loadTestData(EnvConstants.STAGE);
        const loginPage = new LoginPage(page);
        loginPage.doLogin(testData.userName, testData.password);
        //await expect(page).toHaveURL(URLConstants.HOME_PAGE);
    });
    
});