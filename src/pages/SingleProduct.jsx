import { useLoaderData } from "react-router-dom";
import { axiosInstance } from "../utils/axiosInstance";

export const loader = async ({ params }) => {
  const req = await axiosInstance.get(`/products/` + params.id);
  const product = req.data;
  return { product };
};

function SingleProduct() {
  const { product } = useLoaderData();
  return (
    <div className=" md:flex bg-slate-100 rounded-lg p-5 font-mono">
      <div className="flex flex-col items-center md:items-start gap-5">
        <h2 className="text-2xl text-center md:text-left">{product.title}</h2>
        <p className="text-lg">{product.description}</p>
        <span className="text-xl">Brand: {product.brand}</span>
        <p className="text-xl">Category: {product.category}</p>
        <p className="text-xl">Price: {product.price}</p>
      </div>
      <img src={product.thumbnail} alt="" width={300} height={300} />
    </div>
  );
}

export default SingleProduct;
