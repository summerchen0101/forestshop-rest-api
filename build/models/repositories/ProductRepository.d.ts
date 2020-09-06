/// <reference types="mongoose" />
import { IProductModel, IProduct } from '../Product';
declare class ProductRepository<T extends IProductModel, U extends IProduct> {
    model: T;
    constructor(model: T);
    create(doc: U): Promise<IProduct>;
    getList(): import("mongoose").DocumentQuery<IProduct[], IProduct, {}>;
    update(id: string, doc: U): import("mongoose").DocumentQuery<IProduct | null, IProduct, {}>;
    remove(id: string): import("mongoose").DocumentQuery<IProduct | null, IProduct, {}>;
}
declare const _default: ProductRepository<IProductModel, IProduct>;
export default _default;
//# sourceMappingURL=ProductRepository.d.ts.map