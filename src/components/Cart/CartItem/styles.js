import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  card: {
    minWidth: "300px",
  },
  media: {
    minHeight: "220px",
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
    opacity: 0.85,
  },
  cartActions: {
    justifyContent: "space-between",
  },
  buttons: {
    display: "flex",
    alignItems: "center",
  },
}));
