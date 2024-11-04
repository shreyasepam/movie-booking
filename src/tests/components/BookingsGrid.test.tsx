import { describe, it, expect, vi, afterEach } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import BookingsGrid from "../../components/bookingsGrid";
import MoviesMock from "../../dummy/movies.json";
import { IMovieAPIResponse } from "../../redux/interface/movie";

const movies = MoviesMock as IMovieAPIResponse;
const movie = movies.results![0];

const mockBooking = {
  id: "1",
  movie: {
    ...movie,
    title: "Example Movie",
    poster_path: "path/to/example.jpg",
  },
  slot: {
    time: "7:00 PM",
    id: "700",
    cost: 400,
  },
  seats: [5, 17],
  dateTime: "2022-08-15T12:00:00Z",
  user: "John Doe",
};

const mockHandleClick = vi.fn();

describe("BookingsGrid", () => {
  afterEach(() => {
    cleanup();
  });
  it("renders booking details correctly", () => {
    render(
      <BookingsGrid booking={mockBooking} onHandleClick={mockHandleClick} />
    );
    screen.debug();
    expect(screen.getByText("Example Movie")).toBeInTheDocument();
    expect(screen.getByText("7:00 PM")).toBeInTheDocument();
    expect(screen.getByText("5, 17")).toBeInTheDocument();
    expect(screen.getByText("15/08/2022")).toBeInTheDocument(); // dayjs format
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute(
      "src",
      "http://mockimage.server/w500/path/to/example.jpg"
    );
  });

  it("should call onHandleClick when booking grid is clicked", () => {
    render(
      <BookingsGrid booking={mockBooking} onHandleClick={mockHandleClick} />
    );

    fireEvent.click(screen.getByText("Example Movie").closest("div")!); // Use closest div as the clickable area
    expect(mockHandleClick).toHaveBeenCalledWith("1");
  });
});
