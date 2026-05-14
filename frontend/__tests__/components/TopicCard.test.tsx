import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TopicCard from '@/components/TopicCard';

const mockTopic = {
  id: 1,
  title: 'Scrum',
  category: 'framework',
  summary: 'Lightweight agile framework.',
  description: 'A longer description.',
  keywords: ['agile', 'framework'],
};

describe('TopicCard', () => {
  it('renders topic title and summary', () => {
    render(<TopicCard topic={mockTopic} onClick={vi.fn()} />);
    expect(screen.getByText('Scrum')).toBeInTheDocument();
    expect(screen.getByText('Lightweight agile framework.')).toBeInTheDocument();
  });

  it('renders all keywords', () => {
    render(<TopicCard topic={mockTopic} onClick={vi.fn()} />);
    expect(screen.getByText('agile')).toBeInTheDocument();
    expect(screen.getAllByText('framework').length).toBe(2);
  });

  it('calls onClick with topic when clicked', async () => {
    const onClick = vi.fn();
    render(<TopicCard topic={mockTopic} onClick={onClick} />);
    await userEvent.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onClick).toHaveBeenCalledWith(mockTopic);
  });

  it('calls onClick on Enter key', async () => {
    const onClick = vi.fn();
    render(<TopicCard topic={mockTopic} onClick={onClick} />);
    const card = screen.getByRole('button');
    card.focus();
    await userEvent.keyboard('{Enter}');
    expect(onClick).toHaveBeenCalledWith(mockTopic);
  });

  it('calls onClick on Space key', async () => {
    const onClick = vi.fn();
    render(<TopicCard topic={mockTopic} onClick={onClick} />);
    const card = screen.getByRole('button');
    card.focus();
    await userEvent.keyboard(' ');
    expect(onClick).toHaveBeenCalledWith(mockTopic);
  });
});
