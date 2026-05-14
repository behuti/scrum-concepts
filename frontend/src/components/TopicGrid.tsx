'use client';

import { Topic } from '@/lib/types';
import TopicCard from './TopicCard';
import styles from './TopicGrid.module.scss';
import cardStyles from './TopicCard.module.scss';

interface TopicGridProps {
  topics: Topic[];
  onTopicClick: (topic: Topic) => void;
  loading?: boolean;
  error?: string | null;
}

function SkeletonCard() {
  return (
    <div className={`${cardStyles.card} ${styles.skeleton}`} aria-hidden="true">
      <div className={cardStyles.header}>
        <div className={`${styles.skeletonLine} ${styles.skeletonTitle}`} />
        <div className={`${styles.skeletonLine} ${styles.skeletonBadge}`} />
      </div>
      <div className={`${styles.skeletonLine} ${styles.skeletonSummary}`} />
      <div className={`${styles.skeletonLine} ${styles.skeletonSummary} ${styles.skeletonSummaryShort}`} />
      <div className={cardStyles.keywords}>
        <div className={styles.skeletonTag} />
        <div className={styles.skeletonTag} />
        <div className={styles.skeletonTag} />
      </div>
    </div>
  );
}

export default function TopicGrid({
  topics,
  onTopicClick,
  loading,
  error,
}: TopicGridProps) {
  if (loading) {
    return (
      <div className={styles.grid} aria-busy="true">
        {Array.from({ length: 6 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.error}>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="15" y1="9" x2="9" y2="15" />
          <line x1="9" y1="9" x2="15" y2="15" />
        </svg>
        <p>Error loading data: {error}</p>
      </div>
    );
  }

  if (topics.length === 0) {
    return (
      <div className={styles.noResults}>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <p>No topics found matching your criteria.</p>
      </div>
    );
  }

  return (
    <div className={styles.grid}>
      {topics.map((topic) => (
        <TopicCard key={topic.id} topic={topic} onClick={onTopicClick} />
      ))}
    </div>
  );
}