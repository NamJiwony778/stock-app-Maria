import React from "react";
import { selectCount } from "../../redux/socialMediaCountSlice";
import { useSelector } from "react-redux";

const SocialMedia = () => {
  const count = useSelector(selectCount);

  return (
    <div>
      <span>Social Media Posts: </span>
      {count}
    </div>
  );
};

export default SocialMedia;
