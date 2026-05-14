'use client';

import { Topic } from '@/lib/types';

interface TopicCardProps {
  topic: Topic;
  onClick: (topic: Topic) => void;
}

export default function TopicCard({ topic, onClick }: TopicCardProps) {
  return (
    <div
      className="topic-card"
      tabIndex={0}
      role="button"
      onClick={() => onClick(topic)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick(topic);
        }
      }}
    >
      <div className="topic-card-header">
        <h3>{topic.title}</h3>
        <span className={`category-badge ${topic.category}`}>
          {topic.category}
        </span>
      </div>
      <p className="summary">{topic.summary}</p>
      <div className="keywords-row">
        {topic.keywords.map((k) => (
          <span key={k} className="keyword-tag">{k}</span>
        ))}
      </div>
    </div>
  );
}
