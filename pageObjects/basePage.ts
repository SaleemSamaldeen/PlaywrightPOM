import {Page,Locator,test} from "@playwright/test";

export class BasePage {
    readonly page: Page;

    constructor(page:Page){
        this.page = page;
    }

    async fillIn(locator:Locator, value:string) {
        try {
              await locator.fill(value);
        } catch (error) {
        
        }
    }

    async click(locator:Locator) {
        try {
            await locator.click();
        } catch (error) {
            console.log(`Error occurred while trying to click on given locator: ${error}`);
        }
    }

    async waitForPageLoad() {
        await this.page.waitForLoadState('domcontentloaded');
    }
}