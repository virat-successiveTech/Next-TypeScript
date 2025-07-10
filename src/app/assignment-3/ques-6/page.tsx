import Link from "next/link";

interface Product {
  id: number;
  name: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Motorola Edge 50 neo",
  },
  {
    id: 2,
    name: "Samsung Galaxy Edge 50",
  },
  {
    id: 3,
    name: "Sony TV",
  },
  {
    id: 4,
    name: "Dell lattitude E-7430",
  },
];

const ProductPage: React.FC = () => {
  return (
    <>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/assignment-3/question-6/${product.id}`}>
              {product.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductPage;
