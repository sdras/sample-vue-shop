import { action, gondola, locator, page } from "gondolajs";
import { Payment } from "../../data/payment";

@page
export class cartPage {
    @locator
    public lblCartHeader = "//h1[text()='Cart']";
    @locator
    public ifrPaymentFrame = "//div[@id='card']//iframe";
    @locator
    public txtPaymentEmail = "#email";
    @locator
    public txtPaymentCardNumber = "input[name='cardnumber']";
    @locator
    public txtPaymentExpDate = "input[name='exp-date']";
    @locator
    public txtPaymentCVC = "input[name='cvc']";
    @locator
    public txtPaymentPostal = "input[name='postal']";
    @locator
    public btnPayment = "//button[@class='pay-with-stripe']";
    @action("check item displayed", "Check item displayed in shopping cart.")
    public async checkItemDisplayed(productName: string) {
        let patternLocator: string = "//div[@class='cartitems']//h4[text()='%s']";
        var realItemLocator = patternLocator.replace('%s', productName);
        await gondola.checkControlExist(realItemLocator);
    }
    @action("check payment button enabled", "Check whether Payment button is enabled or not.")
    public async checkPaymentButtonEnabled() {
        let attribute = await gondola.getControlProperty(this.btnPayment, "disabled");
        await gondola.checkEqual(attribute, false);
    }
    @action("fill payment information", "Enter payment information")
    public async fillPaymentInfo(payment: Payment) {
        await gondola.waitForElement(this.txtPaymentEmail, 5);
        await gondola.enter(this.txtPaymentEmail, payment.email);
        await gondola.switchFrame(this.ifrPaymentFrame);
        await gondola.waitForElement(this.txtPaymentCardNumber, 5);
        await gondola.enter(this.txtPaymentCardNumber, payment.cardNumber);
        await gondola.enter(this.txtPaymentExpDate, `${payment.month}${payment.year}`);
        await gondola.enter(this.txtPaymentCVC, payment.cvc);
        await gondola.enter(this.txtPaymentPostal, payment.zipCode);
        await gondola.switchFrame("");
    }
}
export default new cartPage();
