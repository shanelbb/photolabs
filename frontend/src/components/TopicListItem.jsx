import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = ({sampleData}) => {
  const {slug, title} = sampleData;
  return (
    <div className='topic-list__item'>
      <a href={"/" + slug}>
        <span>{title}</span>
      </a>
    </div>
  );
};

export default TopicListItem;
