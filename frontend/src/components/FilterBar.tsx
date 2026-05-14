'use client';

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
    <div className="filter-group">
      <button
        className={`filter-btn${activeFilter === 'all' ? ' active' : ''}`}
        onClick={() => onFilterChange('all')}
      >
        All
      </button>
      {categories.map((cat) => (
        <button
          key={cat}
          className={`filter-btn${activeFilter === cat ? ' active' : ''}`}
          onClick={() => onFilterChange(cat)}
        >
          {LABELS[cat] || cat}
        </button>
      ))}
    </div>
  );
}
