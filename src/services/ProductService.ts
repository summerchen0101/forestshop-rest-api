import Product, { IProductModel, IProduct } from '@/models/Product';

class ProductRepository<T extends IProductModel, U extends IProduct> {
  constructor(public model: T) {}

  create(doc: U) {
    return this.model.create(doc);
  }

  getList() {
    return this.model.find();
  }

  update(id: string, doc: U) {
    const data = {
      name: doc.name,
      price: doc.price
    };
    return this.model.findByIdAndUpdate(id, data);
  }

  remove(id: string) {
    return this.model.findByIdAndRemove(id);
  }
}

export default new ProductRepository(Product);
