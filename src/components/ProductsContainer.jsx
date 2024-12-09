import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { GlobalContext } from "../context/globalContext";
import { toast } from "react-toastify";

function ProductsContainer() {
  const { dispatch, selectedProducts } = useContext(GlobalContext);
  const { products } = useLoaderData();

  const buyProduct = (e, prod) => {
    e.preventDefault();
    const product = selectedProducts.find((product) => prod.id == product.id);
    if (product) {
      toast.warn("Already added!");
      return;
    }
    dispatch({ type: "ADD_PRODUCT", payload: prod });
  };

  return (
    <div className="grid md:grid-cols-3 gap-5">
      {products.map((prod) => {
        return (
          <Link
            to={`/singleproduct/${prod.id}`}
            key={prod.id}
            className="card bg-base-100 w-full shadow-xl"
          >
            <figure>
              <img src={prod.thumbnail} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-sm md:text-2xl">{prod.title}</h2>
              <p className="font-semibold">Brand: {prod.brand}</p>
              <p className="font-semibold">Price: $ {prod.price}</p>
              <div className="card-actions justify-end">
                <button
                  onClick={(e) => buyProduct(e, prod)}
                  className="btn btn-primary btn-sm md:btn-md"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductsContainer;
