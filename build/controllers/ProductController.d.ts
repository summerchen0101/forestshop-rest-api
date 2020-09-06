import { Request, Response } from 'express';
declare function createProduct(req: Request, res: Response): void;
declare function getProducts(req: Request, res: Response): void;
declare function updateProduct(req: Request, res: Response): Promise<void>;
declare function delProduct(req: Request, res: Response): void;
declare const _default: {
    createProduct: typeof createProduct;
    updateProduct: typeof updateProduct;
    getProducts: typeof getProducts;
    delProduct: typeof delProduct;
};
export default _default;
//# sourceMappingURL=ProductController.d.ts.map