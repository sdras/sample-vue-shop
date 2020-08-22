import { action, gondola, locator, page } from "gondolajs";

@page
export class productPage {
    @locator
    public elmItems = "//div[@class='item']";
    @locator
    public lblPageTitle = "//main[@class='capsule']//h1";
    @locator
    public lnkTopMenuWomen = "//div[@class='navarea']//ul/a[.=\"Women's\"]";
    @locator
    public lnkTopMenuSale = "//div[@class='navarea']//ul/a[.=\"Sale\"]";
    @locator
    public lnkTopMenuShoppingCart = "//div[@class='navarea']//a[@href='/cart']";
    @locator
    public lblCartCount = "//div[@class='cartcount']";
    @action("add item to cart", "Add product to cart")
    public async addToCart(productName: string, cartCount: any = 1) {
        let patternLocator: string = "//div[@class='item' and ./p[text()='%s']]/button";
        let realLocator: string = patternLocator.replace('%s', productName);
        await gondola.waitForElement(realLocator);
        await gondola.click(realLocator);
        await gondola.waitForElementProperty(this.lblCartCount, "innerText", cartCount.toString(), 5);
    }
    @action("check page title displayed", "Check 'Sale' page title is displayed")
    public async checkSalePageTitleDisplayed() {
        await gondola.checkControlExist(this.lblPageTitle);
        await gondola.checkControlProperty(this.lblPageTitle, "innerText", "Sale");
    }
    @action("check all sale labels exist", "Check 'Sale' label displayed in all products")
    public async checkAllSaleLabelsDisplayed() {
        let count = await gondola.getElementCount(this.elmItems);
        while (--count > 0) {
            await gondola.checkControlExist(`${this.elmItems}[${count}]//span[text()='Sale']`);
        }
    }
    @action("open shopping cart", "Open shopping cart by clicking on cart menu on the top")
    public async openShoppingCart() {
        await gondola.waitForElement(this.lnkTopMenuShoppingCart);
        await gondola.click(this.lnkTopMenuShoppingCart);
    }
}
export default new productPage();
