import StripeApiConsumer from '../repository/StripeApiConsumer.mjs'
const stripe = new StripeApiConsumer();
export default class ProductServices {

    async getProducts() {
        const result = await stripe.getProducts();
        return result;
    }

}