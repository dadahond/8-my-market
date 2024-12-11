// global contex
import { TableRaw } from "../components";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { Link } from "react-router-dom";

function Cart() {
  const { selectedProducts, totalPrice, totalAmount } = useGlobalContext();

  if (selectedProducts.length == 0) {
    return (
      <div className="flex flex-col items-center gap-5">
        <h1 className="text-center text-3xl font-bold text-red-500">
          Your cart is empty!{" "}
        </h1>
        <Link to="/" className="btn btn-secondary">
          Continue shopping
        </Link>
      </div>
    );
  }
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Name</th>
            <th>Price</th>
            <th>Amount:</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {selectedProducts.map((product) => {
            return (
              <TableRaw
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                amount={product.amount}
                thumbnail={product.thumbnail}
                brand={product.brand}
              />
            );
          })}
        </tbody>
      </table>
      <div className="flex justify-between items-center mt-10">
        <h3 className="font-semibold">Total Amount: {totalAmount}</h3>
        <h3 className="font-semibold">Total Price: {totalPrice}</h3>
      </div>
    </div>
  );
}

export default Cart;
