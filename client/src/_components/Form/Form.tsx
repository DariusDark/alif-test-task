import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

const Form = ({
  children,
  open,
  onOpen,
  onClose,
  submitHandler,
  title = "Form",
  buttonText,
  isValidated = true,
  submitButtonText = "Submit",
}: any) => {
  const handleSubmit = () => {
    submitHandler();
    onClose();
  };

  return (
    <>
      <Button variant="contained" onClick={onOpen}>
        {buttonText}
      </Button>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle fontWeight={600}>{title}</DialogTitle>
        <DialogContent sx={{ minWidth: "380px" }}>
          <Box pt="5px">
            <form>{children}</form>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button color="error" onClick={onClose} variant="contained">
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            type="submit"
            disabled={isValidated}
            variant="contained"
          >
            {submitButtonText}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Form;
