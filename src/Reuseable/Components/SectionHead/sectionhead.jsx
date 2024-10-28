import React from "react";
import "./sectionhead.css";
const SectionHead = ({ title, description, description2, className }) => {
  return (
    <>
      <div className={`Section-heading `}>
        <h4>{description}</h4>
        <h2 className={`${className}`}>{title}</h2>
        <h4>{description2}</h4>
      </div>
    </>
  );
};

export default SectionHead;
