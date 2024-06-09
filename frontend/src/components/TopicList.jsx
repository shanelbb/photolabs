import React from "react";
import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = ({topics}) => {
  return (
    <div className='top-nav-bar__topic-list'>
      {topics.map(topic => {
        return <TopicListItem topicData={topic} key={topic.id} />;
      })}
    </div>
  );
};

export default TopicList;
