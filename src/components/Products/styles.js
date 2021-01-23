import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(5),
    paddingBottom: "100px",
    marginTop: "-250px",
    zIndex: 1,
  },
  root: {
    flexGrow: 1,
  },
}));
