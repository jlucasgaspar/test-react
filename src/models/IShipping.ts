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

export interface IShipping {
    id: string;
    customerName: string;
    date: Date;
    departureAddress: {
        street: string;
        number: number;
        additionalInfo?: string;
        neighborhood: string;
        city: string;
        state: string;
        lat: number;
        lng: number;
    }
    arrivalAddress: {
        street: string;
        number: number;
        additionalInfo?: string;
        neighborhood: string;
        city: string;
        state: string;
        lat: number;
        lng: number;
    }
}

export interface IShippingHttpResponse {
    statusCode: number;
    body: string;
}