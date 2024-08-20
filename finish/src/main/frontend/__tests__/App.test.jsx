import { describe, it, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/vitest';
import Home from '../src/app/page'
import React from 'react';


/**
* @vitest-environment jsdom
*/
describe('Testing home page rendering', async () => {
    it('Should render the page correctly', async () => {
        // Setup
        render(<Home />)
        expect(screen.getByText(/Artist Web Service/i)).toBeInTheDocument();
    });
});

