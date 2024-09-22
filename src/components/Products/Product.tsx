import type { Product } from "@/db";
import Image from "next/image";

const Product = ({ product }: { product: Product }) => {
  return (
    <div className="group relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <Image
          src={product?.imageId}
          width={500}
          height={500}
          alt="product image"
          className="h-full w-full object-cover origin-center"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">{product?.name}</h3>
          <p className="mt-1 text-sm to-gray-500">
            Size {product?.size.toUpperCase()}, {product?.color}
          </p>
        </div>

        <p className="text-sm font-medium to-gray-900">{product?.price}</p>
      </div>
    </div>
  );
};

export default Product;
