import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FilterBar from '@/components/FilterBar';

const categories = ['event', 'role', 'artifact'];

describe('FilterBar', () => {
  it('renders All button and all category buttons', () => {
    render(
      <FilterBar
        categories={categories}
        activeFilter="all"
        onFilterChange={vi.fn()}
      />
    );
    expect(screen.getByText('All')).toBeInTheDocument();
    expect(screen.getByText('Events')).toBeInTheDocument();
    expect(screen.getByText('Roles')).toBeInTheDocument();
    expect(screen.getByText('Artifacts')).toBeInTheDocument();
  });

  it('marks the active filter button', () => {
    render(
      <FilterBar
        categories={categories}
        activeFilter="event"
        onFilterChange={vi.fn()}
      />
    );
    expect(screen.getByText('Events').className).toContain('active');
    expect(screen.getByText('All').className).not.toContain('active');
  });

  it('calls onFilterChange with the category when clicked', async () => {
    const onFilterChange = vi.fn();
    render(
      <FilterBar
        categories={categories}
        activeFilter="all"
        onFilterChange={onFilterChange}
      />
    );
    await userEvent.click(screen.getByText('Roles'));
    expect(onFilterChange).toHaveBeenCalledWith('role');
  });

  it('calls onFilterChange with "all" when All is clicked', async () => {
    const onFilterChange = vi.fn();
    render(
      <FilterBar
        categories={categories}
        activeFilter="event"
        onFilterChange={onFilterChange}
      />
    );
    await userEvent.click(screen.getByText('All'));
    expect(onFilterChange).toHaveBeenCalledWith('all');
  });
});
