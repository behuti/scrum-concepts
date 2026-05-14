'use client';

import { useState, useEffect, useCallback } from 'react';
import { Topic } from '@/lib/types';
import { fetchTopics } from '@/lib/api';
import Header from '@/components/Header';
import SearchBar from '@/components/SearchBar';
import FilterBar from '@/components/FilterBar';
import TopicGrid from '@/components/TopicGrid';
import TopicModal from '@/components/TopicModal';

export default function Home() {
  const [topics, setTopics] = useState<Topic[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);

  useEffect(() => {
    fetchTopics()
      .then(setTopics)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const filtered = topics.filter((t) => {
    if (activeFilter !== 'all' && t.category !== activeFilter) return false;
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      t.title.toLowerCase().includes(q) ||
      t.summary.toLowerCase().includes(q) ||
      t.description.toLowerCase().includes(q) ||
      t.keywords.some((k) => k.toLowerCase().includes(q))
    );
  });

  const categories = [...new Set(topics.map((t) => t.category))];

  const handleCloseModal = useCallback(() => setSelectedTopic(null), []);

  return (
    <>
      <Header />
      <main className="container">
        <section className="controls">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
          <FilterBar
            categories={categories}
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />
        </section>
        <p className="results-info">
          {loading || error
            ? ''
            : `${filtered.length} result${filtered.length !== 1 ? 's' : ''}`}
        </p>
        <TopicGrid
          topics={filtered}
          onTopicClick={setSelectedTopic}
          loading={loading}
          error={error}
        />
      </main>
      <TopicModal topic={selectedTopic} onClose={handleCloseModal} />
      <footer>
        <p>
          Scrum Agile Guide — Based on the{' '}
          <a
            href="https://scrumguides.org"
            target="_blank"
            rel="noopener"
          >
            Scrum Guide
          </a>
        </p>
      </footer>
    </>
  );
}
