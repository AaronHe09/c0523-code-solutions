import './Topics.css';

export default function Topics({ topics, handleOnClick, clicked }) {
  function renderDefinition(topic) {
    if (clicked === topic) {
      return <p>{topic.definition}</p>;
    }
  }

  return (
    <div className="topics-container">
      {topics.map((topic) => {
        return (
          <div className="topic-wrapper" key={topic.topic}>
            <button
              className="topic-button"
              type="button"
              onClick={(event) => handleOnClick(topic)}>
              {topic.topic}
            </button>
            {renderDefinition(topic)}
          </div>
        );
      })}
    </div>
  );
}
