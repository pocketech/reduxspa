import React, { useState, useCallback } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { TextInput } from "../atoms";
import RatingBox from "../atoms/RatingBox";

const PostModal = (props) => {
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState(0);
  const [name, setName] = useState("");

  // Functions triggered by inputting text value
  const inputDescription = useCallback(
    (event) => {
      setDescription(event.target.value);
    },
    [setDescription]
  );

  const inputRating = useCallback(
    (event) => {
      setRating(event.target.value);
    },
    [setRating]
  );

  const inputName = useCallback(
    (event) => {
      setName(event.target.value);
    },
    [setName]
  );

  const validateRequiredInput = (...args) => {
    let isBlank = false;
    for (let i = 0; i < args.length; i = (i + 1) | 0) {
      if (args[i] === "") {
        isBlank = true;
      }
    }
    return isBlank;
  };

  const submitForm = () => {
    const isBlank = validateRequiredInput(name, rating, description);

    if (isBlank) {
      alert("必須入力欄が空白です。");
      return false;
    } else {
      alert("success");
    }
  };

  return (
    <Dialog open={props.open} onClose={props.handleOpen} fullWidth>
      <DialogTitle>講義情報を投稿しよう！</DialogTitle>
      <DialogContent>
        <TextInput
          label={"講義名"}
          multiline={false}
          rows={1}
          value={name}
          type={"text"}
          onChange={inputName}
        />
        <RatingBox item="単位" inputRating={inputRating} value={rating} />
        <RatingBox item="内容" inputRating={inputRating} value={rating} />
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
        <Button onClick={props.handleOpen} color="primary">
          キャンセル
        </Button>
        <Button onClick={submitForm} color="primary">
          投稿する
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default PostModal;
