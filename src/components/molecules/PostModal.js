import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getUserId } from '../../store/userSlice';
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { TextInput, RatingBox, SelectBox } from "../atoms";
import { postReview } from '../../store/postSlice'


const PostModal = ({ open, handleOpen }) => {
  const [description, setDescription] = useState("");
  const [cRating, setContentRating] = useState(0);
  const [eRating, setEvaluateRating] = useState(0);
  const [lecture, setLecture] = useState("");
  const [teacher, setTeacher] = useState("");
  const [faculty, setFaculty] = useState("");
  const [semester, setSemester] = useState("");
  const dispatch = useDispatch();
  const authorID = useSelector(getUserId);

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

  const facultyToObj = item => item.id === faculty;
  const facultyObj = faculties.find(facultyToObj);
  const semesterToObj = item => item.id === semester;
  const semesterObj = semesters.find(semesterToObj);
  console.log(facultyObj, semesterObj)

  const allFieldReset = () => {
    setLecture("");
    setTeacher("");
    setFaculty("");
    setSemester("");
    setDescription("");
    setEvaluateRating(0);
    setContentRating(0);
  }


  const inputDescription = useCallback(
    (event) => {
      setDescription(event.target.value);
    },
    [setDescription]
  );

  const inputContentRating =
    (event, newValue) => {
      setContentRating(newValue);
    };
  const inputEvaluateRating =
    (event, newValue) => {
      setEvaluateRating(newValue);
    };

  const inputLecture = useCallback(
    (event) => {
      setLecture(event.target.value);
    },
    [setLecture]
  );
  const inputTeacher = useCallback(
    (event) => {
      setTeacher(event.target.value);
    },
    [setTeacher]
  );

  const submit = async () => {
    await dispatch(postReview(facultyObj, semesterObj, teacher, lecture, cRating, eRating, description, authorID));
    allFieldReset();
    handleOpen()
  }
  return (
    <Dialog open={open} onClose={handleOpen} fullWidth>
      <DialogTitle>講義情報を投稿しよう！</DialogTitle>
      <DialogContent>
        <TextInput
          label={"講義名"}
          multiline={false}
          rows={1}
          value={lecture}
          type={"text"}
          onChange={inputLecture}
        />
        <TextInput
          label={"講師名"}
          multiline={false}
          rows={1}
          value={teacher}
          type={"text"}
          onChange={inputTeacher}
        />
        <SelectBox label="学部" required={true} value={faculty} select={setFaculty} options={faculties} />
        <SelectBox label="学期" required={true} value={semester} select={setSemester} options={semesters} />
        <RatingBox item={"単位"} handleChange={inputEvaluateRating} value={eRating} />
        <RatingBox item={"内容"} handleChange={inputContentRating} value={cRating} />
        <TextInput
          label={"講義を受けての感想を赤裸々に！"}
          multiline={true}
          rows={5}
          value={description}
          type={"text"}
          onChange={inputDescription}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleOpen} color="primary">
          キャンセル
        </Button>
        <Button onClick={submit} color="primary">
          投稿する
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default PostModal;
