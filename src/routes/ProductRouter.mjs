import {router} from '../../deps.mjs'
import * as ProductController from'../controller/ProductController.mjs';


// Register user
router.get('/products', ProductController.getProducts);



export default router;