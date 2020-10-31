import React from "react";
import TextField from "@material-ui/core/TextField";

const TextInput = React.memo(({ label, multiline, rows, value, type, onChange }) =>
  <TextField
    fullWidth
    label={label}
    margin="dense"
    multiline={multiline}
    rows={rows}
    value={value}
    type={type}
    onChange={onChange}
  />
)

export default TextInput;
