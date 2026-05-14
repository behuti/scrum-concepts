'use client';

import { Topic } from '@/lib/types';
import TopicCard from './TopicCard';

interface TopicGridProps {
  topics: Topic[];
  onTopicClick: (topic: Topic) => void;
  loading?: boolean;
  error?: string | null;
}

function SkeletonCard() {
  return (
    <div className="topic-card skeleton" aria-hidden="true">
      <div className="topic-card-header">
        <div className="skeleton-line skeleton-title" />
        <div className="skeleton-line skeleton-badge" />
      </div>
      <div className="skeleton-line skeleton-summary" />
      <div className="skeleton-line skeleton-summary skeleton-summary-short" />
      <div className="keywords-row">
        <div className="skeleton-tag" />
        <div className="skeleton-tag" />
        <div className="skeleton-tag" />
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
      <div className="topics-grid" aria-busy="true">
        {Array.from({ length: 6 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-state">
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
      <div className="no-results">
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
    <div className="topics-grid">
      {topics.map((topic) => (
        <TopicCard key={topic.id} topic={topic} onClick={onTopicClick} />
      ))}
    </div>
  );
}
