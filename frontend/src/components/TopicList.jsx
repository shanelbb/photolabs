import React from "react";
import PropTypes from "prop-types";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const TopicList = ({ topics, onTopicSelect }) => (
    <div className='top-nav-bar__topic-list'>
        {topics.map(topic => (
            <TopicListItem key={topic.id} id={topic.id} title={topic.title} onTopicSelect={onTopicSelect} />
        ))}
    </div>
);

TopicList.propTypes = {
    topics: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
        })
    ).isRequired,
    onTopicSelect: PropTypes.func.isRequired,
};

export default TopicList;
