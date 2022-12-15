import React from "react";
import "./message-history.style.css";

export const MessageHistory = ({ msg }) => {
  if (!msg) return null;
  return msg.map((row, idx) => (
    <div key={idx} className="message-history mt-3">
      <div className="send font-weight-bold text-secondary">
        <div className="sender">{row.messageBy}</div>
        <div className="date">{row.date}</div>
      </div>
      <div className="message">{row.message}</div>
    </div>
  ));
};
