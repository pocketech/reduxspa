import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import Search from "@material-ui/icons/Search";
import Typography from "@material-ui/core/Typography";

const faculties = [
  "政治経済学部",
  "法学部",
  "文化構想学部",
  "文学部",
  "教育学部",
  "商学部",
  "基幹理工学部",
  "創造理工学部",
  "先進理工学部",
  "社会科学部",
  "人間科学部",
  "スポーツ科学部",
  "国際教養学部"
];
faculties.map((item, index) => (
  <MenuItem key={index} value={item}>
    {item}
  </MenuItem>
));
const semesters = ["春学期", "秋学期", "夏季集中", "春季集中"];
semesters.map((item, index) => (
  <MenuItem key={index} value={item}>
    {item}
  </MenuItem>
));

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  dropdownStyle: {
    maxHeight: 300,
  },

  container: {
    [theme.breakpoints.up('sm')]: {
      display: "flex",
      justifyContent: "space-between",
    },
  },
  selectwrap: {
    width: "300px",
    display: "flex",
    [theme.breakpoints.down('xs')]: {
      margin: "0 auto",
    }
  },
  search: {
    [theme.breakpoints.down('xs')]: {
      margin: "0 auto",
      width: 300,
      marginTop: 20
    }
  }

}));

export default function SimpleSelect() {
  const classes = useStyles();
  const [faculty, setFaculty] = useState(`${faculties[0]}`);
  const [semester, setSemester] = useState(`${semesters[0]}`);

  const handleFacultyChange = (event) => setFaculty(event.target.value);
  const handleSemesterChange = (event) => setSemester(event.target.value);
  return (
    <div className={classes.container}>
      <div className={classes.selectwrap}>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">学部</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={faculty}
            MenuProps={{ classes: { paper: classes.dropdownStyle } }}
            onChange={handleFacultyChange}
          >
            {faculties.map((item, index) => (
              <MenuItem key={index} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">学期</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={semester}
            onChange={(event) => {
              handleSemesterChange(event);
            }}
          >
            {semesters.map((item, index) => (
              <MenuItem key={index} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className={classes.search}>
        <Button variant="contained" color="primary" endIcon={<Search />} >
          <Typography variant="h6">
            <span style={{ textDecoration: "none" }}>{faculty}</span>の<span style={{ textDecoration: "none" }}>{semester}</span>の講義を検索する
          </Typography>
        </Button>
      </div>
    </div>

  );
}
