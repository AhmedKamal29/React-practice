import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import FilledInput from "@material-ui/core/FilledInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import MicIcon from "@material-ui/icons/Mic";
import Button from "./Button";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import { BiSortDown } from "react-icons/bi";
import { RiArrowUpSLine } from "react-icons/ri";
import { CgMathEqual } from "react-icons/cg";

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const mic = new SpeechRecognition();

mic.continuous = true;
mic.interimResults = true;
mic.lang = ["en-US", "ar-EG"];

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const Inputs = ({ onAdd, Sorting }) => {
  const [text, setText] = useState("");
  const [priority, setpriority] = useState(2);
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
    console.log(text, priority);
    e.preventDefault();
    if (!text && !priority) {
      alert("Please add a task and set priority");
      return;
    }
    onAdd(text, priority);
    setText("");
    setpriority("");
  };

  const classes = useStyles();

  return (
    <div>
      <form className="TextArea" onSubmit={onSubmit}>
        <FormControl sx={{ m: 1, width: "25ch" }} variant="filled">
          <InputLabel
            className="inputLabel"
            htmlFor="filled-adornment-password"
          >
            What is your task
          </InputLabel>
          <FilledInput
            id="filled-adornment-password"
            value={text}
            onChange={(e) => setText(e.target.value)}
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

        <FormControl
          id="demo-simple-select-outlined-label"
          className={classes.formControl}
        >
          <InputLabel htmlFor="grouped-select">Priority</InputLabel>
          <Select
            className="priorityField"
            value={priority}
            id="demo-simple-select-outlined-label"
            onChange={(e) => {
              setpriority(e.target.value);
            }}
          >
            <MenuItem value={1}>
              <RiArrowUpSLine className="highArrow" />
              High
            </MenuItem>
            <MenuItem value={2}>
              <CgMathEqual className="moderatePriority" />
              Mid
            </MenuItem>
            <MenuItem value={3}>
              <RiArrowUpSLine className="lowArrow" />
              Low
            </MenuItem>
          </Select>
        </FormControl>

        <div class="dropdown">
          <button disabled className="dropbtn">
            <BiSortDown className="SortIcon" />
          </button>
          <div className="dropdown-content">
            <MenuItem
              value="none"
              onClick={() => {
                Sorting("?sortBy=none");
              }}
            >
              None
            </MenuItem>
            <MenuItem
              value="createdAt"
              onClick={() => {
                Sorting("?sortBy=date");
              }}
            >
              CreatedAt
            </MenuItem>
            <MenuItem
              value="Priority"
              onClick={() => {
                Sorting("?sortBy=Priority");
              }}
            >
              Priority
            </MenuItem>
          </div>
        </div>
      </form>
    </div>
  );
};

Inputs.propTypes = {
  placeholder: PropTypes.string,
};

export default Inputs;
