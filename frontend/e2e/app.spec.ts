import { test, expect } from '@playwright/test';

const MOCK_TOPICS = [
  {
    id: 1,
    title: 'Scrum',
    category: 'framework',
    summary: 'Lightweight agile framework for managing complex projects.',
    description: 'Scrum is a lightweight framework.',
    keywords: ['agile', 'framework'],
  },
  {
    id: 2,
    title: 'Sprint Planning',
    category: 'event',
    summary: 'Meeting at the start of the Sprint.',
    description: 'Sprint Planning initiates the Sprint.',
    keywords: ['planning', 'sprint'],
  },
  {
    id: 3,
    title: 'Product Owner',
    category: 'role',
    summary: 'Responsible for maximizing product value.',
    description: 'The Product Owner manages the Product Backlog.',
    keywords: ['po', 'product owner'],
  },
];

test.beforeEach(async ({ page }) => {
  await page.route('**/api/topics', async (route) => {
    await route.fulfill({
      contentType: 'application/json',
      body: JSON.stringify(MOCK_TOPICS),
    });
  });
  await page.goto('/');
});

test('loads and displays all topics', async ({ page }) => {
  await expect(page.locator('.topics-grid')).toBeVisible();
  await expect(page.getByText('Scrum')).toBeVisible();
  await expect(page.getByText('Sprint Planning')).toBeVisible();
  await expect(page.getByText('Product Owner')).toBeVisible();
});

test('search filters topics by title', async ({ page }) => {
  await page.getByPlaceholder('Search topics...').fill('sprint');
  await expect(page.getByText('Sprint Planning')).toBeVisible();
  await expect(page.getByText('Scrum')).not.toBeVisible();
  await expect(page.getByText('Product Owner')).not.toBeVisible();
});

test('filter bar filters by category', async ({ page }) => {
  await page.getByText('Roles').click();
  await expect(page.getByText('Product Owner')).toBeVisible();
  await expect(page.getByText('Sprint Planning')).not.toBeVisible();
  await expect(page.getByText('Scrum')).not.toBeVisible();
});

test('modal opens on card click and closes', async ({ page }) => {
  await page.getByText('Scrum').click();
  await expect(page.getByRole('dialog')).toBeVisible();
  await expect(page.getByText('Scrum is a lightweight framework.')).toBeVisible();
  await page.getByLabel('Close').click();
  await expect(page.getByRole('dialog')).not.toBeVisible();
});

test('modal shows correct topic content', async ({ page }) => {
  await page.getByText('Product Owner').click();
  await expect(page.getByRole('dialog')).toBeVisible();
  await expect(page.getByText('The Product Owner manages')).toBeVisible();
  await expect(page.getByText('po')).toBeVisible();
  await expect(page.getByText('product owner')).toBeVisible();
});

test('theme toggle changes theme', async ({ page }) => {
  const html = page.locator('html');
  await expect(html).toHaveAttribute('data-theme', 'dark');
  await page.getByLabel('Toggle theme').click();
  await expect(html).toHaveAttribute('data-theme', 'light');
  await page.getByLabel('Toggle theme').click();
  await expect(html).toHaveAttribute('data-theme', 'dark');
});

test('results count updates with search', async ({ page }) => {
  await expect(page.getByText('3 results')).toBeVisible();
  await page.getByPlaceholder('Search topics...').fill('scrum');
  await expect(page.getByText('1 result')).toBeVisible();
});
