import React from 'react';
import { render, screen } from "@testing-library/react";
import { Coin } from './index'

it('Check coin label', () => {
    render(
        <Coin coin="BTC" oldPrice={0} currentPrice={-10} />
    )
    expect(screen.getByText('BTC'))
})