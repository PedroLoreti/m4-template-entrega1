import { IProduct, IProductService } from './interfaces';

class ProductList implements IProductService {
  private productList: IProduct[] = [];
  private id: number = 1;

  createProduct(data: { name: string; price: number }): IProduct {
    const newProduct: IProduct = {
      id: this.id,
      name: data.name,
      price: data.price,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    this.productList.push(newProduct);
    this.id++;
    return newProduct;
  }

  getProducts(): IProduct[] {
    console.log(productList)
    return this.productList;
  }

  getOneProduct(id: number): IProduct | undefined {
    return this.productList.find(product => product.id === id);
  }

  updateProduct(id: number, data: { name?: string; price?: number }): IProduct | undefined {
    const index = this.productList.findIndex(product => product.id === id);
    if (index === -1) return undefined;

    const existingProduct = this.productList[index];
    const updatedProduct: IProduct = {
      ...existingProduct,
      updatedAt: new Date(),
      ...data, // Atualiza apenas as chaves que foram passadas no parâmetro data
    };

    this.productList[index] = updatedProduct;
    return updatedProduct;
  }

  deleteProduct(id: number): { message: string } {
    const index = this.productList.findIndex(product => product.id === id);
    if (index === -1) return { message: "Product not found." };

    this.productList.splice(index, 1);
    return { message: "Product successfully deleted." };
  }
}

const productList = new ProductList();
export { productList };


