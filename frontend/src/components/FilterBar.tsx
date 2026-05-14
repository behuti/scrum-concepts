'use client';

import styles from './FilterBar.module.scss';

interface FilterBarProps {
  categories: string[];
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const LABELS: Record<string, string> = {
  event: 'Events',
  role: 'Roles',
  artifact: 'Artifacts',
  concept: 'Concepts',
  metric: 'Metrics',
  practice: 'Practices',
  framework: 'Framework',
};

export default function FilterBar({
  categories,
  activeFilter,
  onFilterChange,
}: FilterBarProps) {
  return (
    <div className={styles.group}>
      <button
        className={`${styles.btn}${activeFilter === 'all' ? ` ${styles.active}` : ''}`}
        onClick={() => onFilterChange('all')}
      >
        All
      </button>
      {categories.map((cat) => (
        <button
          key={cat}
          className={`${styles.btn}${activeFilter === cat ? ` ${styles.active}` : ''}`}
          onClick={() => onFilterChange(cat)}
        >
          {LABELS[cat] || cat}
        </button>
      ))}
    </div>
  );
}