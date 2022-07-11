import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const typeMore = (event) => {
    let changedText = event.target.value;
    setText(changedText);
  };
  const UpperCase = () => {
    setText(text.toUpperCase());
    props.showAlert("Text has been changed to UpperCase", "success");
  };
  const LowerCase = () => {
    setText(text.toLowerCase());
    props.showAlert("Text has been changed to LowerCase", "success");
  };
  const ClearText = () => {
    setText("");
    props.showAlert("Text has been cleared", "success");
  };
  const HandleCopy = () => {
    // var text = document.getElementById("myText");
    // text.select();
    // navigator.clipboard.writeText(text.value);
    navigator.clipboard.writeText(text);
    document.getSelection().removeAllRanges();  
    props.showAlert("Text has been copied", "success");
  };
  const RemoveExtraSpaces = () => {
    var newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces have been removed", "success");
  };
  return (
    <>
      <div
        className="container my-5"
        style={{ backgroundColor: props.mode === "dark" ? "#042743" : "white" }}
      >
        <h1 style={{ color: props.mode === "dark" ? "white" : "black" }}>
          Enter Text here to Analyze
        </h1>
        <div className="mb-3">
          <textarea
            onChange={typeMore}
            style={{
              backgroundColor: props.mode === "dark" ? "#13466a" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            className="form-control"
            id="myText"
            rows={8}
            value={text}
          />
        </div>
        <button
          disabled={text.length === 0}
          onClick={UpperCase}
          type="button"
          className="btn btn-success mx-2 my-2"
        >
          Convert to UpperCase
        </button>
        <button
          disabled={text.length === 0}
          onClick={LowerCase}
          type="button"
          className="btn btn-success mx-2 my-2"
        >
          Convert to LowerCase
        </button>
        <button
          disabled={text.length === 0}
          onClick={ClearText}
          type="button"
          className="btn btn-success mx-2 my-2"
        >
          Clear Text
        </button>
        <button
          disabled={text.length === 0}
          onClick={HandleCopy}
          type="button"
          className="btn btn-success mx-2 my-2"
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          onClick={RemoveExtraSpaces}
          type="button"
          className="btn btn-success mx-2 my-2"
        >
          Remove Extra Spaces
        </button>
      </div>
      <div
        style={{ color: props.mode === "light" ? "#042743" : "white" }}
        className="container my-5"
      >
        <h1>Your Text Summary Here.</h1>
        <p>
          {
            text.split(/\s+/).filter(function (element) {
              return element.length !== 0;
            }).length
          }{" "}
          Words,{" "}
          {
            text.split("").filter(function (element) {
              return element !== " ";
            }).length
          }{" "}
          Characters
        </p>
        <p>
          {text.split(" ").filter(function (element) {
            return element.length !== 0;
          }).length * 0.008}{" "}
          Minutes Read
        </p>
        <h2>Your Text Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in textbox above to Preview it here."}
        </p>
      </div>
    </>
  );
}
