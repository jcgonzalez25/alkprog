import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";

import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import MailIcon from "@material-ui/icons/Mail";
import Badge from "@material-ui/core/Badge";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MonetizationOn from "@material-ui/icons/MonetizationOn";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import HomeIcon from "@material-ui/icons/Home";
import InsertInvitation from "@material-ui/icons/InsertInvitation";
import Mood from "@material-ui/icons/Mood";

import PeopleOutline from "@material-ui/icons/PeopleOutline";
//
import TitleBarAccountsInv from "./titleBars/titleBarAccountsInv";
import TitleBarCal from "./titleBars/titleBarCalendar";
import TitleBarClientDet from "./titleBars/titleBarClientDetails";
import TitleBarClients from "./titleBars/titleBarClients";
import TitleBarHome from "./titleBars/titleBarHome";
import TitleBarNoteTemplates from "./titleBars/titleBarNoteTemplates";
import TitleBarForms from "./titleBars/titleBarForms";
import NewTitleBarMemDet from "./titleBars/titleBarNewMemberDetails";
import NewTitleBarClientDet from "./titleBars/titleBarNewClientDetails";
import TitleBarMemDet from "./titleBars/titleBarMemberDetails";
import TitleBarTeamMembers from "./titleBars/titleBarTeamMembers";

import LocalGasStation from "@material-ui/icons/LocalGasStation";
import MusicNote from "@material-ui/icons/MusicNote";
import InsertChartOutlined from "@material-ui/icons/InsertChartOutlined";

import AccountBalanceWallet from "@material-ui/icons/AccountBalanceWallet";
import AccountBalance from "@material-ui/icons/AccountBalance";

import LibraryBooks from "@material-ui/icons/LibraryBooks";

import InsertDriveFile from "@material-ui/icons/InsertDriveFile";

//import MoreIcon from "@material-ui/icons/MoreVert";
//import Clicktest from "./clicktest";

import TeamMemberActions from "./Actions/teamMemberActions";
//import TeamMemberCheckedV2 from "./teamMemberCheckedv2";
import ActiveRadioButton from "./Old/activeRadioButton";

import clientTextInputs from "./Client/clientTextInputs";

import AssignedClientsTable from "./Tables/assignedClientsTable";
import AssignedClientsActions from "./Actions/asssignedClientsActions";
import AccountsInvoicesTabs from "./AccountsInvoices/accountsInvoicesTabs";

import NoteTemplatesActions from "./Actions/noteTemplatesActions";

import BackEndNoteTemplatesTable from "./Tables/backEndNoteTemplatesTable";
import BackEndFormsTable from "./Tables/backEndFormsTable";
import DocumentationTabs from "./Documentation/documentationTabs";

import FormsTabs from "./formsTabs";
import FormsActions from "./Actions/formsActions";
import FormsTable from "./Tables/formsTable";
import TeamMembersTable from "./Tables/teamMembersTable";

import ClientActions from "./Actions/clientActions";

import ClientTopPanel from "./Client/clientTopPanel";
import ClientDetailsTabs from "./Client/clientDetailsTabs";
import KPI1 from "./Home/kpi1";
import DailyViewKP from "./Home/dailyViewKPI";
import KPI2 from "./Home/kpi2";

import ClientPanelTabs from "./Client/clientPanelTabs";

import MemberPanelTabs from "./panelTabs/memberPanelTabs";
import ReactCalendarBase from "./Calendar/ReactCalendarBase";
//import DatePicker from "./datePicker";

import Email from "./Calendar/email";

import SignIn from "./logInSignUp/signIn";
//import SignUp from "./signUp";

import Documentation from "./Documentation/documentation";
import Home from "./Home/home";

import Cyan from "@material-ui/core/colors/cyan";
//import NewEventDialog2 from "./newEventDialog2";
import NewMemberAppBar from "./Old/newMemberAppBar";
import BackEndTeamMembersTable from "./Tables/backEndTeamMembersTable";
import BackEndClientsTable from "./Tables/backEndClientsTable";
import { Switch, Link, Route } from "react-router-dom";

import NewClientConsolidate from "./newClientConsolidate";
import BackEndAssignedClients from "./Tables/backEndAssignedClientsTable";

import NewTeamMemberConsolidate from "./newTeamMemberConsolidate";
import ConditionalTest from "./conditionalTest";

//width of drawer
const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    backgroundColor: Cyan[800]
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  },

  rightToolbar: {
    marginLeft: "auto",
    marginRight: -12
  }
});

const navStyle = {
  color: "black",
  textDecoration: "none"
};
const navStyle2 = {
  color: "white",
  textDecoration: "none"
};

function Topics() {
  return <div>does this show up?</div>;
}

function First() {
  return <div>First</div>;
}

function Second() {
  return <div>Second</div>;
}

const Page404 = () => {
  return <h3>404 error - Just smile and wave, boys...smile and wave.</h3>;
};

class PersistentDrawerLeft extends React.Component {
  state = {
    open: false,
    anchorEl: null
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };
  /*
  reloadPage() {
    // if (this.state.location !== prevState.location) {
    window.location.reload();
    console.log("Refresh!");
  }
  */

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes, theme } = this.props;
    const { open } = this.state;
    const { anchorEl } = this.state;
    const isMenuOpen = Boolean(anchorEl);

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMenuClose}> Practice Settings</MenuItem>
        <MenuItem onClick={this.handleMenuClose}>Help</MenuItem>
        <Link style={navStyle} to="/signin">
          {" "}
          <MenuItem onClick={this.handleMenuClose}>Sign Out</MenuItem>{" "}
        </Link>
      </Menu>
    );

    return (
      <div className={classes.root}>
        <CssBaseline />
        {/* <BrowserRouter> */}
        <AppBar
          /* do not want relative, static, or sticky; fixed or absolute seems to work */
          position="fixed"
          elevation={1}
          /* makes sure the apps shifts when the drawer is open */
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          {/* makes sure gutters are disabled when the drawer is not open */}
          <Toolbar disableGutters={!open}>
            {/* Icon button with click action*/}
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              {/* Menu icon*/}
              <MenuIcon />
            </IconButton>
            {/* MTSaaS Name */}
            <Link style={navStyle2} to="/home">
              <Typography variant="h6" color="inherit" noWrap>
                Practice In Tune
              </Typography>
            </Link>
            <div className={classes.rightToolbar}>
              <IconButton color="inherit">
                <Badge color="inherit">
                  <MonetizationOn />
                </Badge>
              </IconButton>
              <IconButton color="inherit">
                <Badge /* badgeContent={2} */ color="secondary">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton
                aria-owns={isMenuOpen ? "material-appbar" : undefined}
                aria-haspopup="true"
                onClick={this.handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
            {/* no visible change */}
            <div className={classes.sectionMobile}>
              <IconButton
                aria-haspopup="true"
                onClick={this.handleMobileMenuOpen}
                color="inherit"
              />
            </div>
            {/*end of toolbar and Appbar */}
          </Toolbar>
          {/* having the menu item full code below will make the route work
            <Menu
              anchorEl={anchorEl}
              anchorOrigin={{ vertical: "top", horizontal: "left" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              open={isMenuOpen}
              onClose={this.handleMenuClose}
            >
              <MenuItem onClick={this.handleMenuClose}>
                {" "}
                Practice Settings
              </MenuItem>
              <MenuItem onClick={this.handleMenuClose}>Help</MenuItem>
              <Link style={navStyle} to="/signin">
                {" "}
                <MenuItem onClick={this.handleMenuClose}>
                  Sign Out
                </MenuItem>{" "}
              </Link>
            </Menu> 
            */}
          {renderMenu}
        </AppBar>

        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <List>
            <Link style={navStyle} to="/home">
              <ListItem button>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItem>
            </Link>
            <Link style={navStyle} to="/calendar">
              <ListItem button>
                <ListItemIcon>
                  <InsertInvitation />
                </ListItemIcon>
                <ListItemText primary="Calendar" />
              </ListItem>
            </Link>

            <Link style={navStyle} to="/clients">
              <ListItem button>
                <ListItemIcon>
                  <Mood />
                </ListItemIcon>
                <ListItemText primary="Clients" />
              </ListItem>
            </Link>
            <Link style={navStyle} to="/teammembers">
              <ListItem button>
                <ListItemIcon>
                  <PeopleOutline />
                </ListItemIcon>
                <ListItemText primary="Team Members" />
              </ListItem>
            </Link>
            <ListItem button>
              <ListItemIcon>
                <Badge /* badgeContent={2} */ color="secondary">
                  <MailIcon />
                </Badge>
              </ListItemIcon>
              <ListItemText primary="Messages" />
            </ListItem>
            {/*
              <ListItem button>
                <ListItemIcon>
                  <MusicNote />
                </ListItemIcon>
                <ListItemText primary="Inventory" />
              </ListItem>
              */}
            {/*
              <ListItem button>
                <ListItemIcon>
                  <LocalGasStation />
                </ListItemIcon>
                <ListItemText primary="Mileage" />
              </ListItem>
              */}

            <ListItem button>
              <ListItemIcon>
                <AccountBalanceWallet />
              </ListItemIcon>
              <ListItemText primary="Acounts & Invoices" />
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <AccountBalance />
              </ListItemIcon>
              <ListItemText primary="Payroll" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <InsertChartOutlined />
              </ListItemIcon>
              <ListItemText primary="Reports" />
            </ListItem>
            <Link style={navStyle} to="/forms">
              <ListItem button>
                <ListItemIcon>
                  <InsertDriveFile />
                </ListItemIcon>
                <ListItemText primary="Forms" />
              </ListItem>
            </Link>
            <Link style={navStyle} to="/notetemplates">
              <ListItem button>
                <ListItemIcon>
                  <LibraryBooks />
                </ListItemIcon>
                <ListItemText primary="Note Templates" />
              </ListItem>
            </Link>
          </List>
        </Drawer>

        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open
          })}
        >
          {/* creates header space in between the body text and the top nav*/}
          <div className={classes.drawerHeader} />

          <Switch>
            <Route
              exact
              path="/home"
              render={props => (
                <div>
                  <TitleBarHome />
                  <Home />
                </div>
              )}
            />
            <Route
              exact
              path="/calendar"
              render={props => (
                <div>
                  <TitleBarCal />
                  <ReactCalendarBase />
                </div>
              )}
            />

            <Route
              exact
              path="/calendar/add"
              render={props => (
                <div>
                  <TitleBarCal />
                  <ReactCalendarBase />
                </div>
              )}
            />

            <Route
              exact
              path="/teammembers"
              render={props => (
                <div>
                  <TitleBarTeamMembers />
                  <TeamMemberActions />
                  <BackEndTeamMembersTable />
                </div>
              )}
            />
            <Route
              exact
              path="/clients"
              render={props => (
                <div>
                  {/* {this.reloadPage()} */}
                  <TitleBarClients />
                  <ClientActions />
                  <BackEndClientsTable />
                </div>
              )}
            />

            <Route
              exact
              path="/teammembers/newmember"
              render={() => (
                <div>
                  <NewTitleBarMemDet />
                  <NewTeamMemberConsolidate />
                </div>
              )}
            />
            <Route
              exact
              path="/clients/newclient"
              render={() => (
                <div>
                  <NewTitleBarClientDet />
                  <NewClientConsolidate />
                </div>
              )}
            />
            <Route
              exact
              path="/notetemplates"
              render={() => (
                <div>
                  <TitleBarNoteTemplates />
                  <NoteTemplatesActions />
                  <BackEndNoteTemplatesTable />
                </div>
              )}
            />
            <Route
              exact
              path="/forms"
              render={() => (
                <div>
                  <TitleBarForms />
                  <FormsActions />
                  <BackEndFormsTable />
                </div>
              )}
            />
            <Route
              exact
              path="/signin"
              render={() => (
                <div>
                  <SignIn />
                </div>
              )}
            />
            {/*
            <Route
              path="/signup"
              exact
              render={() => (
                <div>
                  <SignUp />
                </div>
              )}
            />
              */}
            <Route
              exact
              path="/clients/clientdetails"
              render={() => (
                <div>
                  <ClientPanelTabs />
                </div>
              )}
            />

            <Route
              render={() => (
                <div>
                  <Page404 />
                </div>
              )}
            />
          </Switch>

          {/*
          <BrowserRouter>
            <Link to="/topics">Hello there</Link>
          </BrowserRouter>
          <BrowserRouter>
            <Switch>
              <Route path="/home" exact component={Home} />
              <Route path="/blah" exact component={ReactCalendarBase} />
              <Route path="/topics" exact component={Topics} />
            </Switch>
          </BrowserRouter>
          */}

          {/* Sign up*/}
          {/*
          <Signup />
*/}

          {/* Login up*/}
          {/*
          <Login />
*/}
          {/* Title Bars */}
          {/*
          <div>
            <PageTitleBar />
          </div>
          */}
          {/* KPI */}
          {/*
          <div>
            <KPI2 />
            <KPI1 />
          </div>
*/}
          {/* Email */}
          {/*
          <Email />
*/}
          {/* Team members table */}
          {/*
          <div>
            <TeamMemberActions />
            <BackEndTeamMembersTable />
          </div>
*/}
          {/* Version 1.0 of Team member details */}
          {/*
          <div>
            <MemberTopPanel />
            <TeamMemberDetailsTabs />
          </div>
          */}

          <div />

          {/* Version 2.0 ofTeam member details */}
          {/*
<div>
  <MemberPanelTabs />
</div>
*/}
          {/* Clients table */}
          {/*
<ClientActions />
<BackEndClientsTable />
*/}

          {/* Old Client details */}
          {/*
<div>
  <ClientTopPanel />
  <ClientDetailsTabs />
</div>
*/}
          {/* New Client details */}
          {/*
<div>
  <ClientPanelTabs />
</div>
*/}
          {/* Acounts and Invoices tabs */}
          {/*
<div>
  <AccountsInvoicesTabs />
</div>
*/}

          {/*
<div>
  <ReactCalendarBase />
</div>
*/}
          {/*
<div>
  <CalTest />
</div>
*/}
          {/* Documentation tabs */}
          {/*
<div>
  <NoteTemplatesActions />
  <NoteTemplatesTable />
</div>
*/}
          {/* Forms tabs */}
          {/*
<div>
  <FormsActions />
  <FormsTable />
</div>
*/}

          {/*
<div>
  <Documentation />
</div>
*/}
          {/*
<FrontEndTest />
*/}
          {/*
<FrontEndTest3 />
*/}
          {/*
<NewMemberAppBar />
*/}
        </main>
        {/*</BrowserRouter> */}
      </div>
    );
  }
}
/* no visible changes */
PersistentDrawerLeft.propTypes = {
  classes: PropTypes.object.isRequired
  // theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(PersistentDrawerLeft);
