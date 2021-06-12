import { useProduct, useProducts } from "./products";

describe("useProduct()", () => {
  test("returns a product",() => {
    const slang = "ipsum-non-velit"

    const product = useProduct({slang});

    expect(product.title).toEqual("Ipsum non Velit");
  });

  test("returns undefined if product not was found",() => {
    const slang = "product-fake"

    const product = useProduct({slang});

    expect(product).toBeUndefined();
  });

});

describe("useProducts()", () => {
  test("returns a product list",() => {
    const products = useProducts();

    expect(products.length).toBeGreaterThan(1);
  });
})

