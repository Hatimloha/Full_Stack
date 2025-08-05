// 5. BONUS: Create a Product component that takes title, price, and inStock (true/false) and shows "In stock" or "Out of stock" accordingly.

function Product({title, price, inStock}){
    return(
        <div>
            <h2>{title}</h2>
            <h2>{price}</h2>
            <p>Status: {inStock ? "In Stock" : "Out of stock"}</p>
        </div>
    )
}


function App() {
  return (
    <div>
      <Product title="Laptop" price={999} inStock={true} />
      <Product title="Headphones" price={199} inStock={false} />
    </div>
  );
}