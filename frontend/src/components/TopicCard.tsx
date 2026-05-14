'use client';

import { Topic } from '@/lib/types';
import styles from './TopicCard.module.scss';

interface TopicCardProps {
  topic: Topic;
  onClick: (topic: Topic) => void;
}

export default function TopicCard({ topic, onClick }: TopicCardProps) {
  return (
    <div
      className={styles.card}
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
      <div className={styles.header}>
        <h3>{topic.title}</h3>
        <span className={styles.badge} data-category={topic.category}>
          {topic.category}
        </span>
      </div>
      <p className={styles.summary}>{topic.summary}</p>
      <div className={styles.keywords}>
        {topic.keywords.map((k) => (
          <span key={k} className={styles.keyword}>{k}</span>
        ))}
      </div>
    </div>
  );
}