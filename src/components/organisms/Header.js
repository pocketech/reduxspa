import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { getSignedIn } from '../../store/userSlice'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import MenuIcon from '@material-ui/icons/Menu';
import HelpIcon from '@material-ui/icons/Help';
import ContactIcon from '@material-ui/icons/Hearing';
import HomeIcon from '@material-ui/icons/Home';
import SettingIcon from '@material-ui/icons/Settings';
import LogoutIcon from '@material-ui/icons/PermIdentity';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NikikyuIcon from '@material-ui/icons/Pets';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  // toolBar: {
  //   [theme.breakpoints.up("sm")]: {
  //     width: theme.breakpoints.values.md,
  //     margin: "0,auto"
  //   }
  // },
  toolbar: theme.mixins.toolbar,
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  title: {
    flexGrow: 1,
    fontFamily: 'Grandstander, cursive',
    letterSpacing: "3px",

  },
  offset: theme.mixins.toolbar,
  navButton: {
    [theme.breakpoints.down("xs")]: {
      display: "none"
    }
  },
  signInButton: {
    fontFamily: 'Noto Sans JP, sans-serif',
    fontWeight: 700,
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  menuIcon: {
    width: 35,
    height: 35
  },
  nikukyuIcon: {
    marginLeft: 3,
    verticalAlign: -6,
    width: 35,
    height: 35,
    transform: "rotate(10deg)",
    // color: "#fff6d9"
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  }
}));

export default function Header(props) {
  const { window } = props;
  const classes = useStyles();
  const dispatch = useDispatch();
  const isLogin = useSelector(getSignedIn);
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const theme = useTheme();
  const container = window !== undefined ? () => window().document.body : undefined;
  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <ListItem button >
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary={"HOME"} />
        </ListItem>
        <ListItem button >
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary={"マイページ"} />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button >
          <ListItemIcon>
            <ContactIcon />
          </ListItemIcon>
          <ListItemText primary={"お問い合わせ"} />
        </ListItem>
        <ListItem button >
          <ListItemIcon>
            <SettingIcon />
          </ListItemIcon>
          <ListItemText primary={"設定"} />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button >
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary={"ログアウト"} />
        </ListItem>
      </List>
    </div>
  );


  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu drawer"
            onClick={handleDrawerToggle}
          >
            <MenuIcon classes={{ root: classes.menuIcon }} />
          </IconButton>
          <Typography variant="h4" component="h1" className={classes.title}>
            Corgy
            <NikikyuIcon classes={{ root: classes.nikukyuIcon }} />
          </Typography>
          <Button color="inherit" variant="outlined" className={classes.signInButton}>
            {isLogin ? "ログアウト" : "ログイン"}
          </Button>
          <ButtonGroup
            variant="contained"
            edge="end"
            color="secondary"
            size="large"
            className={classes.navButton}
            aria-label="text primary button group"
          >
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
        </Toolbar>
      </AppBar>
      <div className={classes.offset} />
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}