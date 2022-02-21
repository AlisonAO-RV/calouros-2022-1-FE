import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {},
  todo: {
    maxWidth: "500px",
    height: "100vh",
    // backgroundColor: "#CCC",
    margin: "auto",
    borderRadius: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
  },
  card: {
    width: "100%",
    minHeight: "530px",
  },
  media: {
    height: 180,
    padding: "10px",
    margin: "10px",
  },
  pos: {
    marginBottom: -5,
  },
}));
