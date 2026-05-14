import { Topic } from './types';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || '';

export async function fetchTopics(): Promise<Topic[]> {
  const res = await fetch(`${API_BASE}/api/topics`);
  if (!res.ok) throw new Error(`Failed to fetch topics: ${res.status}`);
  return res.json();
}

export async function fetchTopic(id: number): Promise<Topic> {
  const res = await fetch(`${API_BASE}/api/topics/${id}`);
  if (!res.ok) throw new Error(`Failed to fetch topic: ${res.status}`);
  return res.json();
}
