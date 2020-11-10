import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchPosts } from '../../store/postSlice'
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import Search from "@material-ui/icons/Search";
import Typography from "@material-ui/core/Typography";


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

const SearchField = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();


  const faculties = [
    { id: "PSE", name: "政治経済学部", alias: "政経", color: "#E56A02" },
    { id: "LAW", name: "法学部", alias: "法", color: "#55957A" },
    { id: "CMS", name: "文化構想学部", alias: "文構", color: "#006A68" },
    { id: "HSS", name: "文学部", alias: "文", color: "#004998" },
    { id: "EDU", name: "教育学部", alias: "教育", color: "#B75296" },
    { id: "SOC", name: "商学部", alias: "商", color: "#011A5C" },
    { id: "FSE", name: "基幹理工学部", alias: "基幹", color: "#D89101" },
    { id: "CSE", name: "創造理工学部", alias: "創造", color: "#AAB968" },
    { id: "ASE", name: "先進理工学部", alias: "先進", color: "#01519A" },
    { id: "SSS", name: "社会科学部", alias: "社学", color: "#F49D00" },
    { id: "HUM", name: "人間科学部", alias: "人科", color: "#009ACC" },
    { id: "SPS", name: "スポーツ科学部", alias: "スポ科", color: "#017BC4" },
    { id: "SILS", name: "国際教養学部", alias: "国教", color: "#00A2A4" },
  ];

  const semesters = [
    { id: "spring", name: "春学期" },
    { id: "autum", name: "秋学期" },
    { id: "summer", name: "夏季集中" },
    { id: "winter", name: "春季集中" },
    { id: "laboratory", name: "研究室,卒研ゼミ" }
  ];

  //検索フィールドの初期値
  const [faculty, setFaculty] = useState(`${faculties[0].name}`);
  const [semester, setSemester] = useState(`${semesters[0].name}`);

  //コールバック関数
  const handleFacultyChange = (event) => setFaculty(event.target.value);
  const handleSemesterChange = (event) => setSemester(event.target.value);

  //現在のfaculty(semester)と同じ値のnameプロパティを持つオブジェクトをfaculties(semesters)配列から抽出し、そのオブジェクトからidプロパティを抽出
  const facultyObj = faculties.find(item => item.name === faculty);
  const fID = facultyObj.id;
  const semesterObj = semesters.find(item => item.name === semester);
  const sID = semesterObj.id;

  //クエリパラメータを取得
  let params = new URLSearchParams(window.location.search.substring(1));
  let facultyParam = params.get("faculty");
  let semesterParam = params.get("semester");

  //初回のみ実行
  // useEffect(() =>
  //   dispatch(fetchPosts("PSE", "spring")),
  //   [dispatch]);

  //クエリパラメータが変わる度に(検索ボタンを押すたびに)実行
  useEffect(() =>
    dispatch(fetchPosts(facultyParam, semesterParam)),
    [dispatch, facultyParam, semesterParam]
  );


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
            {faculties.map((item) =>
              (<MenuItem key={item.id} value={item.name}>
                {item.name}
              </MenuItem>)
            )};
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">学期</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={semester}
            onChange={event => handleSemesterChange(event)}
          >
            {semesters.map((item) => (
              <MenuItem key={item.id} value={item.name}>
                {item.name}
              </MenuItem>
            ))};
          </Select>
        </FormControl>
      </div>
      <div className={classes.search}>
        <Button
          variant="contained"
          color="primary"
          endIcon={<Search />}
          onClick={() => history.push(`/?faculty=${fID}&semester=${sID}`)}
        >
          <Typography variant="h6">
            <span style={{ textDecoration: "none" }}>{faculty}</span>の<span style={{ textDecoration: "none" }}>{semester}</span>の講義を検索する
          </Typography>
        </Button>
      </div>
    </div>

  );
}

export default SearchField;