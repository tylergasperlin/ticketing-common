export enum OrderStatus {
    // order has been created but ticket that is tryingto be ordered has not been reserved 
    Created = 'created',
    // ticket order is trying to reserve has already been reserved or when user cancelled order or order expires before payment
    Cancelled = 'cancelled',
    // order has successfully reserved the ticket 
    AwaitingPayment = 'awaiting:payment',
    // order has reserved the ticket and user has provided payment
    Complete = 'complete'
}