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
// const SelectBox = ({ label, required, select, options, value }) => {
//   return (
//     <FormControl>
//       <InputLabel>{label}</InputLabel>
//       <Select
//         value={value}
//         required={required}
//         onChange={event => select(event.target.value)}
//       >
//         {options.map((option) => {
//           return
//           <MenuItem
//             key={option.id}
//             value={option.id}
//           >
//             {option.name}
//           </MenuItem>
//         })}
//       </Select>
//     </FormControl>
//   )
// };

export default SelectBox;