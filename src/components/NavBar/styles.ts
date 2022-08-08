// import { makeStyles } from '@material-ui/core/styles';
import { makeStyles } from '@mui/styles';

const drawerWidth = 240;

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
    '&:hover': {
      color: 'white !important',
      textDecoration: 'none',
    },
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShring: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
}));
