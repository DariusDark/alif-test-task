import { makeAutoObservable } from "mobx";

const formFieldsInitialState = {
  name: "",
  category: "",
  price: "",
  quantity: "",
  available: "",
};

const limit: number = 5;

class RandomDataStore {
  isInfiniteLoaderContainerHidden: boolean = true;
  formFields: any = formFieldsInitialState;
  infiniteLoader: boolean = false;
  dialogScreen: boolean = false;
  loader: boolean = false;
  randomData: any = [];
  page: number = 1;

  constructor() {
    makeAutoObservable(this);
  }

  private showInfiniteLoaderContainer = () => {
    this.isInfiniteLoaderContainerHidden = false;
  };
  private hideInfiniteLoaderContainer = () => {
    this.isInfiniteLoaderContainerHidden = true;
  };

  public increasePageCount = async () => {
    this.page += 1;
    try {
      const response = await fetch(
        `http://localhost:3000/data?_page=${this.page}&_limit=${limit}`
      );
      const data = await response.json();
      if (data.length !== limit) {
        this.hideInfiniteLoaderContainer();
      }
      this.randomData = [...this.randomData, ...data];
    } catch (error) {
      console.log(error);
    }
  };

  public showInfiniteLoader = () => {
    this.infiniteLoader = true;
  };

  public hideInfiniteLoader = () => {
    this.infiniteLoader = false;
  };

  public openDialogScreen = () => {
    console.log("work");
    this.dialogScreen = true;
  };

  public closeDialogScreen = () => {
    this.dialogScreen = false;
    this.formFields = formFieldsInitialState;
  };

  public changeField = (name: string, value: string) => {
    this.formFields[name] = value;
  };

  private setLoader = (loaderState: boolean) => {
    this.loader = loaderState;
  };

  public submitRandomData = async () => {
    this.setLoader(true);
    try {
      const response = await fetch("http://localhost:3000/data", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(this.formFields),
      });
      if (this.isInfiniteLoaderContainerHidden) {
        const data = await response.json();
        this.randomData = [...this.randomData, data];
      }
    } catch (error) {
      console.log(error);
    } finally {
      this.setLoader(false);
    }
  };

  public getRandomFields = async (
    signal: AbortSignal | undefined,
    page: number
  ) => {
    this.setLoader(true);
    try {
      const response = await fetch(
        `http://localhost:3000/data?_page=${page}&_limit=${limit}`,
        {
          signal,
        }
      );
      const data = await response.json();
      this.randomData = data;
      this.showInfiniteLoaderContainer();
    } catch (error) {
      console.log(error);
    } finally {
      this.setLoader(false);
    }
  };

  public resetRandomDataStore = () => {
    this.loader = false;
    this.dialogScreen = false;
    this.randomData = [];
    this.formFields = formFieldsInitialState;
    this.page = 1;
    this.isInfiniteLoaderContainerHidden = false;
    this.infiniteLoader = false;
  };
}

export default new RandomDataStore();
