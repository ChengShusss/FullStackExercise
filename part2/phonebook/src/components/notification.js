import React from "react";
import "./notification.css"

const Notification = ({ message }) => {
    if (message === null) {
      return null
    }
  
    return (
      <div className={message.isError ? "error" : "msg"}>
        {message.str}
      </div>
    )
  }

export default Notification;