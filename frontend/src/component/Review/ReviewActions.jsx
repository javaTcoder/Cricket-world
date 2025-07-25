import React, { useState } from "react";
import { IconButton, Typography } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ReportIcon from "@mui/icons-material/Report";
import { useStyles } from "./ReviewStyle";

const ReviewActions = ({ review }) => {
  const classes = useStyles();
  const [likes, setLikes] = useState(review.likes?.length || 0);

  // Placeholder handlers
  const handleLike = () => setLikes((l) => l + 1);
  const handleDislike = () => setLikes((l) => (l > 0 ? l - 1 : 0));
  // Example handler in ReviewActions.jsx
  const handleReport = () => {
    // ...existing logic...
    // Save notification for admin (simulate with localStorage)
    const flagged = JSON.parse(localStorage.getItem("flaggedReports") || "[]");
    flagged.push({
      time: new Date().toISOString(),
      message: "A review was flagged as abusive or inappropriate.",
    });
    localStorage.setItem("flaggedReports", JSON.stringify(flagged));
    alert("Reported! Admin will be notified.");
  };

  return (
    <div className={classes.actionsRoot}>
      <IconButton onClick={handleLike}>
        <ThumbUpIcon />
      </IconButton>
      <Typography>{likes}</Typography>
      <IconButton onClick={handleDislike}>
        <ThumbDownIcon />
      </IconButton>
      <IconButton onClick={handleReport}>
        <ReportIcon />
      </IconButton>
    </div>
  );
};

export default ReviewActions;