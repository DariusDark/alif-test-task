import { useEffect } from "react";
import WindowLoader from "../../_components/WindowLoader/WindowLoader";
import RandomDataStore from "../../_store/RandomDataStore";
import { observer } from "mobx-react-lite";
import { Box } from "@mui/material";
import RandomDataTable from "./RandomDataTable";
import RandomDataForm from "./RandomDataForm";

const handleInfiniteScroll = (entries: IntersectionObserverEntry[]) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      RandomDataStore.showInfiniteLoader();
      RandomDataStore.increasePageCount();
    } else {
      RandomDataStore.hideInfiniteLoader();
    }
  });
};

const intersectionObserver = new IntersectionObserver(handleInfiniteScroll);

const RandomData = () => {
  const { page, loader, getProductsData: getRandomFields, resetRandomDataStore } =
    RandomDataStore;

  useEffect(() => {
    const controller: AbortController = new AbortController();
    getRandomFields(controller.signal, page);
    intersectionObserver.observe(document.getElementById("loaderContainer")!);
    return () => {
      controller.abort();
      resetRandomDataStore();
    };
  }, []);

  return (
    <Box>
      <Box mb={3}>
        <RandomDataForm />
      </Box>
      <RandomDataTable />
      <WindowLoader loading={loader} />
    </Box>
  );
};

export default observer(RandomData);
