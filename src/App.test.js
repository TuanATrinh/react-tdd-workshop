import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Movie from './Movie';

test('renders images in the MovieList component', async() => {
  await render(<App />);
  const images = await screen.findAllByRole('img');
  expect(images.length).toBeGreaterThan(0);
})


