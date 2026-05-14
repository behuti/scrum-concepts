'use client';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="search-wrapper">
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
      <label htmlFor="searchInput" className="sr-only">Search topics</label>
      <input
        id="searchInput"
        type="text"
        placeholder="Search topics..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete="off"
      />
    </div>
  );
}
