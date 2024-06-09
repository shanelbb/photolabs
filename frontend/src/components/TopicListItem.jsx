import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = ({topicData}) => {
  const {slug, title} = topicData;
  return (
    <div className='topic-list__item'>
      <a href={"/" + slug}>
        <span>{title}</span>
      </a>
    </div>
  );
};

export default TopicListItem;
