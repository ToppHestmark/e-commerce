import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    maxWidth: "100%",
    background: "white",
    zIndex: "9",
  },
  media: {
    height: "0",
    width: "100%",
    position: "relative",
    paddingTop: "56.25%", // 16:9
  },
  cardActions: {
    background: "white",
    display: "flex",
    justifyContent: "flex-end",
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
    zIndex: 1,
    opacity: 0.85,
  },
}));
