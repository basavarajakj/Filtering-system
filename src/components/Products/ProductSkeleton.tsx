
const ProductSkeleton = () => {
  return (
    <div className="relative animate-pulse">
      <div className="aspect-square overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80">
        <div className="h-full w-full bg-gray-300"></div>
      </div>
      <div className="mt-4 flex flex-col gap-2">
        <div className="bg-gray-200 h-4 w-full"></div>
        <div className="bg-gray-200 h-4 w-full"></div>
      </div>
    </div>
  )
}

export default ProductSkeleton