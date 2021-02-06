import React, { useState } from "react";

import BeautyStar from "beauty-stars";

const Rating = ({ averageRating }) => {
  const [stars, setStars] = useState(averageRating);
  return (
    <>
      <BeautyStar
        inactiveColor={"#E4C81B"}
        activeColor={"#4C4309"}
        size={"14px"}
        gap={"3px"}
        value={!stars ? 0 : stars}
        onChange={(value) => setStars(value)}
      ></BeautyStar>
    </>
  );
};

export default Rating;
