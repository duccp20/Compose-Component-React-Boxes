import React from "react";
import convertDate from "../helpers/convertDate";
import Comment from "./Comment";

const ComposeComponent = () => {
  const comment = {
    date: new Date(),
    text: "I hope you enjoy learning React!",
    author: {
      name: "Hello Kitty",
      avatarUrl: "https://placekitten.com/g/64/64",
    },
  };

  return (
    <Comment
      author={comment.author}
      text={comment.text}
      name={comment.author.name}
      avatar={comment.author.avatarUrl}
      date={convertDate(comment.date)}
    ></Comment>
  );
};

export default ComposeComponent;
