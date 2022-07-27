// import { makeStyles } from '@material-ui/core/styles';
import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  toolbar: {
    height: '80px',
    display: 'flex',
    justifyContent: 'space-between',
    marginLeft: '240px',
    // mobile device
    [theme.breakpoints.down('sm')]: {
      marginLeft: '0px',
      flexWrap: 'wrap',
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    // higer than sm, meaning not mobile device (up)
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  linkButton: {

  }
}));
