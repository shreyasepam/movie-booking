import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import BookingsGrid from '../../components/bookingsGrid';
import dayjs from 'dayjs';

const mockBookingData = {
  slot: {
    id: '1',
    cost: 10,
    time: '18:00',
  },
  seats: [1, 2, 3],
  dateTime: '2023-10-20T14:00:00.000Z',
  user: 'John Doe',
};

describe('BookingsGrid', () => {
  it('renders booking details correctly', () => {
    render(<BookingsGrid booking={mockBookingData} />);

    expect(screen.getByText('Slot:')).toBeInTheDocument();
    expect(screen.getByText('18:00')).toBeInTheDocument();

    expect(screen.getByText('Seat no:')).toBeInTheDocument();
    expect(screen.getByText('1, 2, 3')).toBeInTheDocument();

    expect(screen.getByText('Date:')).toBeInTheDocument();
    const formattedDate = dayjs(mockBookingData.dateTime).format('DD/MM/YYYY');
    expect(screen.getByText(formattedDate)).toBeInTheDocument();

    expect(screen.getByText('User:')).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });
});