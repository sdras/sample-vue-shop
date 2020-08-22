
export class Payment {
    _email: string = "";
    _cardNumber: string = "";
    _mm: string = "";
    _yy: string = "";
    _cvc: string = "";
    _zipc: string = "";

    constructor(zipCode: string = "70000") {
        this.setDefaultValues(zipCode);
    }

    public setDefaultValues(zipCode: string) {
        this._email = "testing@gmail.com";
        this._cardNumber = "5555 5555 5555 4444";
        this._mm = "01";
        this._yy = "25";
        this._cvc = "123";
        this._zipc = zipCode;
    }

    get email(): string {
        return this._email;
    }
    set email(value: string) {
        this._email = value;
    }

    get cardNumber(): string {
        return this._cardNumber;
    }
    set cardNumber(value: string) {
        this._cardNumber = value;
    }

    get month(): string {
        return this._mm;
    }
    set month(value: string) {
        this._mm = value;
    }

    get year(): string {
        return this._yy;
    }
    set year(value: string) {
        this._yy = value;
    }

    get cvc(): string {
        return this._cvc;
    }
    set cvc(value: string) {
        this._cvc = value;
    }

    get zipCode(): string {
        return this._zipc;
    }
    set zipCode(value: string) {
        this._zipc = value;
    }
}