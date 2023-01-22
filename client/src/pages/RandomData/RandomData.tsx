import { useEffect, useMemo } from "react";
import WindowLoader from "../../_components/WindowLoader/WindowLoader";
import RandomDataStore from "../../_store/RandomDataStore";
import { observer } from "mobx-react-lite";
import { Box, Grid, MenuItem, TextField } from "@mui/material";
import Form from "../../_components/Form/Form";
import RandomDataTable from "./RandomDataTable";
import RandomDataForm from "./RandomDataForm";

const RandomData = () => {
  const {
    page,
    loader,
    getRandomFields,
    increasePageCount,
    showInfiniteLoader,
    hideInfiniteLoader,
    resetRandomDataStore,
  } = RandomDataStore;

  const handleInfiniteScroll = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        showInfiniteLoader();
        increasePageCount();
      } else {
        hideInfiniteLoader();
      }
    });
  };

  const intersectionObserver = new IntersectionObserver(handleInfiniteScroll);

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
