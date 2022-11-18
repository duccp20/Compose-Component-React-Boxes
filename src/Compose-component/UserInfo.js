import React from "react";
import Avatar from "./Avatar";

const UserInfo = ({ author }) => {
  return (
    <div>
      <Avatar avatar={author.avatarUrl}></Avatar>
      <p>{author.name}</p>
    </div>
  );
};

export default UserInfo;
