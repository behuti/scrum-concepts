import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TopicModal from '@/components/TopicModal';

const mockTopic = {
  id: 1,
  title: 'Scrum',
  category: 'framework',
  summary: 'A summary.',
  description: 'Scrum is a lightweight framework.',
  keywords: ['agile', 'framework'],
};

describe('TopicModal', () => {
  it('renders nothing when topic is null', () => {
    const { container } = render(
      <TopicModal topic={null} onClose={vi.fn()} />
    );
    expect(container.innerHTML).toBe('');
  });

  it('renders topic details when topic is provided', () => {
    render(<TopicModal topic={mockTopic} onClose={vi.fn()} />);
    expect(screen.getByText('Scrum')).toBeInTheDocument();
    expect(
      screen.getByText('Scrum is a lightweight framework.')
    ).toBeInTheDocument();
    expect(screen.getByText('agile')).toBeInTheDocument();
    expect(screen.getAllByText('framework').length).toBe(2);
  });

  it('calls onClose when close button is clicked', async () => {
    const onClose = vi.fn();
    render(<TopicModal topic={mockTopic} onClose={onClose} />);
    await userEvent.click(screen.getByLabelText('Close'));
    expect(onClose).toHaveBeenCalled();
  });

  it('calls onClose when overlay is clicked', async () => {
    const onClose = vi.fn();
    render(<TopicModal topic={mockTopic} onClose={onClose} />);
    const overlay = screen.getByRole('dialog');
    await userEvent.click(overlay);
    expect(onClose).toHaveBeenCalled();
  });
});
