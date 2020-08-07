import ProductServices from '../service/ProductServices.mjs'

const productServices = new ProductServices();

export const getProducts = async (req, res, next) => {

    const response =  await productServices.getProducts().catch(function (error) {

        //TODO refactor response
        console.error('Error saving document', error);
        return res.status(500).json(error);
    });

    console.log(response);

    return res.status(200).json(response);
};