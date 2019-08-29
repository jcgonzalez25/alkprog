import React, { Component } from "react";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Checkbox from "@material-ui/core/Checkbox";
import "react-big-calendar/lib/css/react-big-calendar.css";
import MomentUtils from "@date-io/moment";
import {
  MuiPickersUtilsProvider,
  DatePicker,
  TimePicker
} from "@material-ui/pickers";
import { Switch, Link, Route } from "react-router-dom";
import Container from "@material-ui/core/Container";
import axios from "axios";

const localizer = BigCalendar.momentLocalizer(moment);
const propTypes = {};
moment().toDate();

const styles = theme => ({
  state: {
    open: false
  },

  root: {
    paddingTop: theme.spacing(10),
    height: "100%"
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 400
  },
  textField2: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 194
  },
  dense: {
    marginTop: 16
  },
  menu: {
    //width: 200
  },
  root3: {
    width: "100%"
  }
});

const newBillTypes = [
  {
    value: "Billable",
    label: "Billable"
  },

  {
    value: "Non-billable",
    label: "Non-billable"
  }
];

const newClientTypes = [
  {
    value: "Individual",
    label: "Individual"
  },

  {
    value: "Facility",
    label: "Facility"
  }
];

const repeatOptions = [
  {
    value: "Daily",
    label: "Daily"
  },

  {
    value: "Weekly",
    label: "Weekly"
  },
  {
    value: "Monthly",
    label: "Monthly"
  },
  {
    value: "Custom",
    label: "Custom"
  }
];

const repeatEndOptions = [
  {
    value: "After",
    label: "After"
  },
  {
    value: "On Date",
    label: "On Date"
  }
];

const customFreqOptions = [
  {
    value: "Daily",
    label: "Daily"
  },

  {
    value: "Weekly",
    label: "Weekly"
  },
  {
    value: "Monthly",
    label: "Monthly"
  }
];

const categories = [
  {
    value: "None",
    label: "None"
  }
];

class ReactCalendarBase extends Component {
  constructor(...args) {
    super(...args);

    this.state = {
      cal_events: [
        //State is updated via componentDidMount
      ],
      therapistData: [],
      clientData: [],
      data: [],
      //id: 0,
      // NEW EVENT
      newBillType: "",
      newClientType: "",
      newClient: "",
      newTherapist: "",
      newLocation: "",
      newCategory: "",
      newStartDate: "",
      newStartTime: "",
      newEndDate: "",
      newEndTime: "",
      information: "",
      intervalIsSet: "",
      checkedRepeat: false,
      repeatOption: null,
      newEndRepeat: null,
      newNumOccurences: null,
      selectedDateOccurenceEnd: null,
      existingCustomFreq: null,
      sun: false,
      mon: false,
      tues: false,
      wed: false,
      thu: false,
      fri: false,
      sat: false,
      newRepeatEveryNumWeeks: null,
      newRepeatEveryNumMonths: null,
      selectedDate: moment().format("YYYY-MM-DD HH:mm:ss"),
      endSelectedDate: moment().format("YYYY-MM-DD HH:mm:ss")
    };
  }

  convertDate = date => {
    return moment.utc(date).toDate();
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/events")
      .then(response => {
        console.log("Got event data!");
        console.log(response.data);
        let appointments = response.data;
        this.setState({
          cal_events: appointments
        });
      })
      .then(response2 => {
        return axios
          .get("http://localhost:5000/gettherapists")
          .then(response2 => {
            console.log("Got therapist data!");
            console.log(response2.data);
            this.setState({
              therapistData: response2.data
            });
          });
      })
      .then(response3 => {
        return axios.get("http://localhost:5000/getclients").then(response3 => {
          console.log("Got client data!");
          console.log(response3.data);
          let clientTest = response3.data;
          this.setState({
            clientData: clientTest
          });
        });
      })
      .catch(function(error) {
        console.log(error);
      });

    if (!this.state.intervalIsSet) {
      let interval = setInterval(this.getDataFromDb, 1000);
      this.setState({ intervalIsSet: interval });
      console.log("Data interval set!");
    }
  }

  // does not let a process live forever

  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({ intervalIsSet: null });
      console.log("Unmounted from events!");
    }
  }

  onSubmit(e) {
    //experiment keeping preventDefault
    //e.preventDefault();

    const obj = {
      newBillType: this.state.newBillType,
      newClientType: this.state.newClientType,
      newTherapist: this.state.newTherapist,
      newLocation: this.state.newLocation,
      newCategory: this.state.newCategory,
      newClient: this.state.newClient,
      selectedDate: this.state.selectedDate,
      endSelectedDate: this.state.endSelectedDate
    };
    axios
      .post("http://localhost:5000/putData2", obj)
      .then(res => console.log(res.data));
    /* this will clear everything after saving+closing */

    this.setState({
      newBillType: "",
      newClientType: "",

      newClient: "",
      newTherapist: "",
      newLocation: "",
      newCategory: "",
      selectedDate: moment().format("YYYY-MM-DD HH:mm:ss"),
      endSelectedDate: moment().format("YYYY-MM-DD HH:mm:ss")
    });
  }

  /* show new event dialog box */
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  /* close new event dialog box */
  handleClose = () => {
    this.setState({
      open: false,
      //this will set the values to blank once the window is closed
      newBillType: "",
      newClientType: "",
      title: "",
      newClient: "",
      newTherapist: "",
      newLocation: "",
      newCategory: "",
      checkedRepeat: false,
      repeatOption: null,
      newEndRepeat: null,
      newNumOccurences: null,
      selectedDateOccurenceEnd: null,
      existingCustomFreq: null,
      sun: false,
      mon: false,
      tues: false,
      wed: false,
      thu: false,
      fri: false,
      sat: false,
      newRepeatEveryNumWeeks: null,
      newRepeatEveryNumMonths: null,
      selectedDate: moment().format("YYYY-MM-DD HH:mm:ss"),
      endSelectedDate: moment().format("YYYY-MM-DD HH:mm:ss")
    });
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleChangeCheck = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  handleChangeCheck2 = name => event => {
    this.setState({
      [name]: event.target.checked,
      //this will set the values to blank once the window is closed
      repeatOption: null,
      newEndRepeat: null,
      newNumOccurences: null,
      selectedDateOccurenceEnd: null,
      existingCustomFreq: null,
      sun: false,
      mon: false,
      tues: false,
      wed: false,
      thu: false,
      fri: false,
      sat: false,
      newRepeatEveryNumWeeks: null,
      newRepeatEveryNumMonths: null
    });
  };

  handleDateChangeStart = date => {
    this.setState({ selectedDate: date.format("YYYY-MM-DD HH:mm:ss") });
  };

  handleDateChangeEnd = date => {
    this.setState({ endSelectedDate: date.format("YYYY-MM-DD HH:mm:ss") });
  };
  /*
  reloadPage() {
    window.location.reload();
  }
  */

  /*
  someMethod() {
    // Force a render without state change...
    this.forceUpdate();
  }
  */

  render() {
    const { classes } = this.props;
    //const classes = withStyles();
    const {
      cal_events,
      therapistData,
      clientData,
      selectedDate,
      endSelectedDate
    } = this.state;

    return (
      <div>
        <Container style={{ height: 1000 }} maxWidth="lg">
          <BigCalendar
            className={classes.root}
            selectable
            startAccessor={cal_events => new Date(cal_events.start)}
            endAccessor={cal_events => new Date(cal_events.end)}
            localizer={localizer}
            events={cal_events}
            views={["month", "week", "day"]}
            defaultDate={new Date()}
            defaultView="month"
            onSelectSlot={this.handleClickOpen}
            // (this sets the start time of 8am)
            min={new Date(2000, 1, 1, 8)}
            // this sets the end time of 8pm)
            max={new Date(2000, 1, 1, 20)}
          />
        </Container>

        <Dialog open={this.state.open} onClose={this.handleClose}>
          <form className={classes.container} noValidate autoComplete="off">
            <DialogContent>
              <TextField
                required
                id="bill_type"
                select
                label="Bill Type"
                className={classes.textField}
                value={this.state.newBillType}
                onChange={e => this.setState({ newBillType: e.target.value })}
                //helperText="Please select your currency"
                margin="normal"
                variant="outlined"
                SelectProps={{
                  MenuProps: {
                    className: classes.menu
                  }
                }}
              >
                {newBillTypes.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                required
                id="client_type"
                select
                label="Client Type"
                className={classes.textField}
                value={this.state.newClientType}
                onChange={e => this.setState({ newClientType: e.target.value })}
                //helperText="Please select your currency"
                margin="normal"
                variant="outlined"
                SelectProps={{
                  MenuProps: {
                    className: classes.menu
                  }
                }}
              >
                {newClientTypes.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                required
                id="newClient"
                select
                label="Client"
                className={classes.textField}
                value={this.state.newClient}
                onChange={this.handleChange("newClient")}
                //helperText="Please select your currency"
                margin="normal"
                variant="outlined"
                SelectProps={{
                  MenuProps: {
                    className: classes.menu
                  }
                }}
              >
                {clientData.map(option => (
                  <MenuItem key={option.value} value={option.client_full_name}>
                    {option.client_full_name}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                id="standard-select-therapist"
                select
                label="Therapist"
                variant="outlined"
                margin="normal"
                className={classes.textField}
                value={this.state.newTherapist}
                onChange={this.handleChange("newTherapist")}
                SelectProps={{
                  MenuProps: {
                    className: classes.menu
                  }
                }}
              >
                {therapistData.map(option => (
                  <MenuItem key={option.value} value={option.member_full_name}>
                    {option.member_full_name}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                required
                id="newLocation"
                label="Location "
                className={classes.textField2}
                value={this.state.newLocation}
                onChange={e => this.setState({ newLocation: e.target.value })}
                margin="normal"
                variant="outlined"
              />
              <TextField
                required
                id="newCategory"
                select
                label="Category"
                className={classes.textField2}
                value={this.state.newCategory}
                onChange={e => this.setState({ newCategory: e.target.value })}
                //helperText="Please select your currency"
                margin="normal"
                variant="outlined"
                SelectProps={{
                  MenuProps: {
                    className: classes.menu
                  }
                }}
              >
                {categories.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <MuiPickersUtilsProvider utils={MomentUtils}>
                <Grid container row>
                  <DatePicker
                    margin="normal"
                    className={classes.textField2}
                    label="Date picker"
                    value={selectedDate}
                    onChange={this.handleDateChangeStart}
                  />
                  <TimePicker
                    margin="normal"
                    className={classes.textField2}
                    label="Time picker"
                    value={selectedDate}
                    onChange={this.handleDateChangeStart}
                  />
                </Grid>
              </MuiPickersUtilsProvider>
              <MuiPickersUtilsProvider utils={MomentUtils}>
                <Grid container row>
                  <DatePicker
                    margin="normal"
                    label="Date picker"
                    className={classes.textField2}
                    value={endSelectedDate}
                    onChange={this.handleDateChangeEnd}
                  />
                  <TimePicker
                    margin="normal"
                    label="Time picker"
                    className={classes.textField2}
                    value={endSelectedDate}
                    onChange={this.handleDateChangeEnd}
                  />
                </Grid>
              </MuiPickersUtilsProvider>
              <Container>
                <FormGroup row>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={this.state.checkedRepeat}
                        onChange={this.handleChangeCheck2("checkedRepeat")}
                        value="checkedRepeat"
                      />
                    }
                    label="Repeat"
                  />
                </FormGroup>
              </Container>
              {this.state.checkedRepeat ? (
                <TextField
                  id="standard-select-repeatOption"
                  select
                  label="Repeats"
                  variant="outlined"
                  className={classes.textField}
                  value={this.state.repeatOption}
                  onChange={this.handleChange("repeatOption")}
                  SelectProps={{
                    MenuProps: {
                      className: classes.menu
                    }
                  }}
                >
                  {repeatOptions.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              ) : null}

              {this.state.repeatOption === "Custom" ? (
                <TextField
                  id="standard-select-client"
                  select
                  label="Custom Frequency"
                  variant="outlined"
                  margin="normal"
                  className={classes.textField}
                  value={this.state.existingCustomFreq}
                  onChange={this.handleChange("existingCustomFreq")}
                  SelectProps={{
                    MenuProps: {
                      className: classes.menu
                    }
                  }}
                >
                  {customFreqOptions.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              ) : null}

              {this.state.existingCustomFreq === "Daily" ? (
                <FormGroup row>
                  <FormLabel component="legend">Every</FormLabel>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={this.state.sun}
                        onChange={this.handleChangeCheck("sun")}
                        value="sun"
                      />
                    }
                    label="Su"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={this.state.mon}
                        onChange={this.handleChangeCheck("mon")}
                        value="mon"
                      />
                    }
                    label="M"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={this.state.tues}
                        onChange={this.handleChangeCheck("tues")}
                        value="tues"
                      />
                    }
                    label="T"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={this.state.wed}
                        onChange={this.handleChangeCheck("wed")}
                        value="wed"
                      />
                    }
                    label="W"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={this.state.thu}
                        onChange={this.handleChangeCheck("thu")}
                        value="thu"
                      />
                    }
                    label="Th"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={this.state.fri}
                        onChange={this.handleChangeCheck("fri")}
                        value="fri"
                      />
                    }
                    label="F"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={this.state.sat}
                        onChange={this.handleChangeCheck("sat")}
                        value="sat"
                      />
                    }
                    label="Sa"
                  />
                </FormGroup>
              ) : null}

              {this.state.existingCustomFreq === "Weekly" ? (
                <TextField
                  id="standard-newNumOccurences"
                  label="Every Number of Weeks"
                  variant="outlined"
                  className={classes.textField2}
                  value={this.state.newRepeatEveryNumWeeks}
                  onChange={this.handleChange("newRepeatEveryNumWeeks")}
                  margin="normal"
                />
              ) : null}

              {this.state.existingCustomFreq === "Monthly" ? (
                <TextField
                  id="standard-newNumOccurences"
                  label="Every Number of Months"
                  variant="outlined"
                  className={classes.textField2}
                  value={this.state.newRepeatEveryNumMonths}
                  onChange={this.handleChange("newRepeatEveryNumMonths")}
                  margin="normal"
                />
              ) : null}

              {this.state.checkedRepeat ? (
                <TextField
                  id="standard-select-client"
                  select
                  label="End Repeat"
                  variant="outlined"
                  margin="normal"
                  className={classes.textField2}
                  value={this.state.newEndRepeat}
                  onChange={this.handleChange("newEndRepeat")}
                  SelectProps={{
                    MenuProps: {
                      className: classes.menu
                    }
                  }}
                >
                  {repeatEndOptions.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              ) : null}

              {this.state.newEndRepeat === "After" ? (
                <TextField
                  id="standard-newNumOccurences"
                  label="Occurences"
                  variant="outlined"
                  className={classes.textField2}
                  value={this.state.newNumOccurences}
                  onChange={this.handleChange("existingNumOccurences")}
                  margin="normal"
                />
              ) : null}

              {this.state.newEndRepeat === "On Date" ? (
                <MuiPickersUtilsProvider utils={MomentUtils}>
                  <DatePicker
                    inputVariant="outlined"
                    className={classes.textField2}
                    margin="normal"
                    id="mui-pickers-date"
                    label="End On"
                    value={this.state.selectedDateOccurenceEnd}
                    onChange={this.handleDateOccurenceChange}
                  />
                </MuiPickersUtilsProvider>
              ) : null}
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Cancel
              </Button>

              <Button
                onClick={() => {
                  this.onSubmit(
                    this.state.newBillType,
                    this.state.newClientType,
                    this.state.newClient,
                    this.state.thereapist,
                    this.state.newLocation,
                    this.state.newCategory,
                    this.state.selectedDate,
                    this.state.endSelectedDate
                    /* the rest of the values (the reucrring ones) will eventually be submitted */
                  );
                }}
                color="primary"
              >
                Save
              </Button>

              <Button onClick={this.handleClose} color="primary">
                Close
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      </div>
    );
  }
}

ReactCalendarBase.propTypes = propTypes;

export default withStyles(styles)(ReactCalendarBase);
