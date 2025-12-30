type Props = {
  params: Promise<{ id: string }>;
};

export default async function ProductDetails({ params }: Props) {
  const { id } = await params;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">
        Product ID: {id}
      </h1>

      <p className="mt-2 text-gray-600">
        This is the product details page.
      </p>

      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
        Add to Cart
      </button>
    </div>
  );
}
