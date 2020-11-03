import React from 'react';
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginBottom: 16,
    minWidth: 120,
    width: "100%"
  },
  dropdownStyle: {
    maxHeight: 300,
  },
}));

const SelectBox = (props) => {
  const classes = useStyles();

  return (
    <FormControl className={classes.formControl}>
      <InputLabel >{props.label}</InputLabel>
      <Select
        value={props.value} required={props.required}
        onChange={(e) => props.select(e.target.value)}
        MenuProps={{ classes: { paper: classes.dropdownStyle } }}

      >
        {props.options.map((value) => {
          return <MenuItem key={value.id} value={value.id}>{value.name}</MenuItem>
        })}
      </Select>
    </FormControl>
  );
};

export default SelectBox;