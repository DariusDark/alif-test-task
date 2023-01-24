import { makeAutoObservable } from "mobx";
import { api } from "../api";
import { ProductType } from "../_interfaces/RandomDataStore";

const formFieldsInitialState: Omit<ProductType, "id"> = {
  name: "",
  category: "",
  price: "",
  quantity: "",
  available: "",
};

const LIMIT = 5;

class RandomDataStore {
  // TYPE
  isInfiniteLoaderContainerHidden = true;
  formFields = formFieldsInitialState;
  infiniteLoader = false;
  dialogScreen = false;
  loader = false;
  products: ProductType[] = [];
  page = 1;

  constructor() {
    makeAutoObservable(this);
  }

  showInfiniteLoaderContainer = () => {
    this.isInfiniteLoaderContainerHidden = false;
  };
  hideInfiniteLoaderContainer = () => {
    this.isInfiniteLoaderContainerHidden = true;
  };

  increasePageCount = async () => {
    this.page += 1;
    try {
      const products = await api.getProducts(this.page, LIMIT);

      if (products.length !== LIMIT) {
        this.hideInfiniteLoaderContainer();
      }
      this.products = [...this.products, ...products];
    } catch (error) {
      console.log(error);
    }
  };

  showInfiniteLoader = () => {
    this.infiniteLoader = true;
  };

  hideInfiniteLoader = () => {
    this.infiniteLoader = false;
  };

  openDialogScreen = () => {
    this.dialogScreen = true;
  };

  closeDialogScreen = () => {
    this.dialogScreen = false;
    this.formFields = formFieldsInitialState;
  };

  changeField = (name: keyof Omit<ProductType, "id">, value: string) => {
    this.formFields[name] = value;
  };

  setLoader = (loaderState: boolean) => {
    this.loader = loaderState;
  };

  postProductData = async () => {
    this.setLoader(true);
    try {
      if (this.isInfiniteLoaderContainerHidden) {
        const product = await api.postProduct(this.formFields);
        this.products = [...this.products, product];
      }
    } catch (error) {
      console.log(error);
    } finally {
      this.setLoader(false);
    }
  };

  getProductsData = async (signal: AbortSignal | undefined, page: number) => {
    this.setLoader(true);
    try {
      const products = await api.getProducts(page, LIMIT, { signal });
      this.products = products;
      this.showInfiniteLoaderContainer();
    } catch (error) {
      console.log(error);
    } finally {
      this.setLoader(false);
    }
  };

  resetRandomDataStore = () => {
    this.loader = false;
    this.dialogScreen = false;
    this.products = [];
    this.formFields = formFieldsInitialState;
    this.page = 1;
    this.isInfiniteLoaderContainerHidden = false;
    this.infiniteLoader = false;
  };
}

export default new RandomDataStore();
