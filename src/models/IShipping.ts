export interface IShippingRequest {
    customerName: string;
    date: Date;
    arrivalAddressNumber: number;
    arrivalAddressStreet: string;
    arrivalAddressAdditionalInfo?: string;
    arrivalAddressCity: string;
    arrivalAddressState: string;
    departureAddressNumber: number;
    departureAddressAdditionalInfo?: string;
    departureAddressStreet: string;
    departureAddressCity: string;
    departureAddressState: string;
}