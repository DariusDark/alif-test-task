import { ProductType } from "./_interfaces/RandomDataStore";

const HOST = "http://localhost:3000/data";

export const api = {
  async getProducts(
    page: number,
    limit: number,
    fetchArgs?: Parameters<typeof fetch>["1"]
  ) {
    const url = new URL(HOST);
    url.searchParams.set("_page", page.toString());
    url.searchParams.set("_limit", limit.toString());
    const response = await fetch(url, fetchArgs);

    const data = await response.json();
    return data as ProductType[];
  },
  async postProduct(
    product: Omit<ProductType, "id">,
    fetchArgs?: Parameters<typeof fetch>["1"]
  ) {
    const url = new URL(HOST);
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(product),
      ...fetchArgs,
    });
    const data = await response.json();
    return data as ProductType;
  },
};
