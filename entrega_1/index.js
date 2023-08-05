class ProductManager {
    constructor() {
      this.products = [];
      this.lastProductId = 0;
    }
  
    addProduct(product) {
      if (!product.title || !product.description || !product.price || !product.thumbnail || !product.code || !product.stock) {
        console.error('Todos los campos son obligatorios.');
        return;
      }
  
      if (this.products.some((p) => p.code === product.code)) {
        console.error('El campo "code" ya está en uso.');
        return;
      }
  
      this.lastProductId++;
      const newProduct = { ...product, id: this.lastProductId };
      this.products.push(newProduct);
      console.log('Producto agregado:', newProduct);
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      const product = this.products.find((p) => p.id === id);
      if (!product) {
        console.error('Not found');
      }
      return product;
    }
  }
  
  
  const productManager = new ProductManager();
  
  const product1 = {
    title: 'Producto 1',
    description: 'Descripción del producto 1',
    price: 50.0,
    thumbnail: '/ruta/imagen1.jpg',
    code: 'PROD001',
    stock: 10,
  };
  
  const product2 = {
    title: 'Producto 2',
    description: 'Descripción del producto 2',
    price: 75.0,
    thumbnail: '/ruta/imagen2.jpg',
    code: 'PROD002',
    stock: 5,
  };
  
  productManager.addProduct(product1);
  productManager.addProduct(product2);
  
  const allProducts = productManager.getProducts();
  console.log('Todos los productos:', allProducts);
  
  const productIdToFind = 2;
  const foundProduct = productManager.getProductById(productIdToFind); 