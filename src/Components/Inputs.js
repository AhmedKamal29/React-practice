import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import MicIcon from "@material-ui/icons/Mic";
import Button from "./Button";

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const mic = new SpeechRecognition();

mic.continuous = true;
mic.interimResults = true;
mic.lang = "en-US";

const Inputs = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [Listening, setListening] = useState(false);

  const handleListen = () => {
    if (Listening) {
      mic.start();
      mic.onend = () => {
        console.log("continue..");
        mic.start();
      };
    } else {
      mic.stop();
      mic.onend = () => {
        console.log("Stopped Mic on Click");
      };
    }
    mic.onstart = () => {
      console.log("Mics on");
    };

    mic.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("");
      console.log(transcript);
      setText(transcript);
      mic.onerror = (event) => {
        console.log(event.error);
      };
    };
  };

  useEffect(() => {
    handleListen();
  }, [Listening]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("Please add a task");
      return;
    }
    onAdd(text);
    setText("");
  };

  return (
    <form className="TextArea" onSubmit={onSubmit}>
      <FormControl variant="outlined">
        <InputLabel className="inputLabel">What is your task</InputLabel>
        <OutlinedInput
          required
          value={text}
          onChange={(e) => setText(e.target.value)}
          label="what is your task"
          endAdornment={
            <InputAdornment position="end">
              <MicIcon
                onClick={() => {
                  setListening((Listening) => !Listening);
                }}
                className={`${Listening ? "Listen micIcon" : "micIcon"}`}
                edge="end"
              />
            </InputAdornment>
          }
        />
        <Button type="submit" text="Add Task" />
      </FormControl>
    </form>
  );
};

Inputs.propTypes = {
  placeholder: PropTypes.string,
};

export default Inputs;
