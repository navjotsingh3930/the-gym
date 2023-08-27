import React from "react";
import styles from "./paraContainer.module.css";
const ParaContainer = (props) => {
    const {para} =props;
  
  return (
    <div className={styles.paraContainer}>
        {
            para.map((value , index)=>{
                return (
                    <p key={index}>{value.paragraph}</p>
                )
            })
        }
      <p></p>
    </div>
  );
};

export default ParaContainer;
