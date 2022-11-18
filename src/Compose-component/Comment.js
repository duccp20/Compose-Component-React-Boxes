import React from "react";
import UserInfo from "./UserInfo";
import Date from "./Date";
import Text from "./Text";

const Comment = ({ date, text, author }) => {
  return (
    <div>
      <UserInfo author={author}></UserInfo>
      <Text text={text}></Text>
      <Date date={date}></Date>
    </div>
  );
};

export default Comment;
