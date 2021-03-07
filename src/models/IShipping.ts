export interface IShippingRequest {
    customerName: string;
    date: Date;
    departureAddressStreet: string;
    departureAddressNumber: number;
    departureAddressAdditionalInfo?: string;
    departureAddressNeighborhood: string;
    departureAddressCity: string;
    departureAddressState: string;
    arrivalAddressStreet: string;
    arrivalAddressNumber: number;
    arrivalAddressAdditionalInfo?: string;
    arrivalAddressNeighborhood: string;
    arrivalAddressCity: string;
    arrivalAddressState: string;
}