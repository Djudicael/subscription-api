import {stripeSystem} from '../config/payment/stripe.mjs'
export default class StripeApiConsumer {

    async getProducts() {
        const result = await  stripeSystem.products.list({});
        return result.data;
    };
    

}