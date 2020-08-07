import dotenv from 'dotenv';
const config = dotenv.config();
import { stripe } from '../../../deps.mjs';

const PUBLIC_KEY = process.env.PUBLIC_KEY;
const SECRET_STRIPE_API_KEY = process.env.SECRET_STRIPE_API_KEY;


const stripeSystem = stripe(SECRET_STRIPE_API_KEY);

//test


 /*  const test = async()=>{
    const result = await  stripeSystem.products.list({});
    console.log(result);

}


test();*/
export { stripeSystem };