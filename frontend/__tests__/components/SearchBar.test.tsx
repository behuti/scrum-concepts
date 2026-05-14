import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBar from '@/components/SearchBar';

describe('SearchBar', () => {
  it('renders search input with placeholder', () => {
    render(<SearchBar value="" onChange={vi.fn()} />);
    expect(
      screen.getByPlaceholderText('Search topics...')
    ).toBeInTheDocument();
  });

  it('calls onChange when user types', async () => {
    const onChange = vi.fn();
    render(<SearchBar value="" onChange={onChange} />);
    const input = screen.getByPlaceholderText('Search topics...');
    await userEvent.type(input, 'sprint');
    expect(onChange).toHaveBeenCalledTimes(6);
    expect(onChange).toHaveBeenLastCalledWith('t');
  });

  it('displays the current value', () => {
    render(<SearchBar value="hello" onChange={vi.fn()} />);
    const input = screen.getByPlaceholderText(
      'Search topics...'
    ) as HTMLInputElement;
    expect(input.value).toBe('hello');
  });
});
