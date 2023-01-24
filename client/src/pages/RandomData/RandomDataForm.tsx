import { Grid, MenuItem, TextField } from "@mui/material";
import { observer } from "mobx-react-lite";
import { BaseSyntheticEvent, ChangeEvent } from "react";
import Form from "../../_components/Form/Form";
import {
  IFields,
  ISelectFields,
  ISelectOptions,
} from "../../_interfaces/RandomDataForm";
import RandomDataStore from "../../_store/RandomDataStore";

const selectOptions: ISelectOptions[] = [
  { value: 1, label: "Yes" },
  { value: 0, label: "No" },
];

const RandomDataForm = () => {
  const {
    formFields,
    dialogScreen,
    changeField,
    postProductData: submitRandomData,
    openDialogScreen,
    closeDialogScreen,
  } = RandomDataStore;

  const validateFields = () => {
    return (
      formFields.name.length === 0 ||
      formFields.name.length > 25 ||
      formFields.category.length === 0 ||
      formFields.category.length > 15 ||
      formFields.price.length === 0 ||
      formFields.price.length > 10 ||
      formFields.quantity.length === 0 ||
      formFields.quantity.length > 10 ||
      formFields.available.length === 0
    );
  };

  const fields: IFields[] = [
    { name: "name", label: "Name", type: "string", value: formFields.name },
    {
      name: "category",
      label: "Category",
      type: "string",
      value: formFields.category,
    },
    { name: "price", label: "Price", type: "string", value: formFields.price },
    {
      name: "quantity",
      label: "Quantity",
      type: "string",
      value: formFields.quantity,
    },
  ];

  const selectFields: ISelectFields[] = [
    {
      name: "available",
      label: "Available",
      type: "select",
      select: true,
      value: formFields.available,
    },
  ];

  const handleChangeField = (event: BaseSyntheticEvent) => {
    const { name, value } = event.target;
    changeField(name, value);
  };

  const fieldsParser = fields.map((fieldOpts: IFields) => (
    <Grid item key={fieldOpts.name}>
      <TextField {...fieldOpts} fullWidth onChange={handleChangeField} />
    </Grid>
  ));

  const selectFieldsParser = selectFields.map((fieldOptions: ISelectFields) => (
    <Grid item key={fieldOptions.name}>
      <TextField {...fieldOptions} fullWidth onChange={handleChangeField}>
        {selectOptions.map((selectOptions) => (
          <MenuItem key={selectOptions.label} value={selectOptions.value}>
            {selectOptions.label}
          </MenuItem>
        ))}
      </TextField>
    </Grid>
  ));

  return (
    <Form
      submitButtonText="Create"
      submitHandler={submitRandomData}
      open={dialogScreen}
      onClose={closeDialogScreen}
      onOpen={openDialogScreen}
      buttonText="Create product"
      title="Product form"
      isValidated={validateFields()}
    >
      <Grid container direction="column" spacing={2}>
        {fieldsParser}
        {selectFieldsParser}
      </Grid>
    </Form>
  );
};

export default observer(RandomDataForm);
