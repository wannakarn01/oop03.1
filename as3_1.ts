interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

let myInventory: Product[] = [
  { id: 1, name: "Laptop", price: 25000, quantity: 10 },
  { id: 2, name: "Mouse", price: 500, quantity: 5 },
  { id: 3, name: "Keyboard", price: 1200, quantity: 3 }
];

function updateStock(productId: number, amountSold: number): void {
  const product = myInventory.find(item => item.id === productId);

  if (!product) {
    console.log("Product not found");
    return;
  }

  if (amountSold > product.quantity) {
    console.log("Not enough stock");
  } else {
    product.quantity -= amountSold;
    console.log(`Successfully updated! Remaining ${product.name}: ${product.quantity}`);
  }
}

console.log("--- ก่อนขายสินค้า ---", myInventory);

updateStock(2, 2);

updateStock(3, 5);

console.log("--- หลังขายสินค้า ---", myInventory);