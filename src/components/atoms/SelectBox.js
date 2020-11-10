import React from 'react';
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  formControl: {
    marginBottom: 16,
    minWidth: 120,
    width: "100%"
  },
  dropdownStyle: {
    maxHeight: 300,
  },
}));

const SelectBox = React.memo(({ label, value, required, select, options }) => {
  const classes = useStyles();

  return (
    <FormControl className={classes.formControl}>
      <InputLabel >{label}</InputLabel>
      <Select
        value={value}
        required={required}
        onChange={e => select(e.target.value)}
        //セレクトボックスの高さを調節する
        MenuProps={
          { classes: { paper: classes.dropdownStyle } }
        }
      >
        {options.map(value =>
          <MenuItem
            key={value.id}
            value={value.id}
          >
            {value.name}
          </MenuItem>
        )}
      </Select>
    </FormControl>
  );
});

export default SelectBox;