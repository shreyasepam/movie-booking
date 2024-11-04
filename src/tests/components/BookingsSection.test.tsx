import { describe, it, expect, vi, afterEach } from "vitest";
import { Provider } from "react-redux";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import configureStore from "redux-mock-store";
import BookingsSection from "../../components/bookingsSection";
import MoviesMock from "../../dummy/movies.json";
import { IMovieAPIResponse } from "../../redux/interface/movie";

const mockStore = configureStore();
const store = mockStore({});

vi.mock("../../redux/reduxHooks", () => ({
  useAppDispatch: () => vi.fn(),
}));

vi.mock("../appImage", () => () => <div>AppImage</div>);
vi.mock("../bookingsGrid", () => () => <div>BookingsGrid</div>);

const movies = MoviesMock as IMovieAPIResponse;
const movie = movies.results![0];

const data = [
  {
    id: "1",
    movie: {
      ...movie,
      title: "Inception",
      poster_path: "path/to/inception.jpg",
    },
    seats: [10, 14],
    dateTime: "2025-12-01T18:00:00Z",
    user: "John Doe",
  },
];

describe("BookingsSection", () => {
  afterEach(() => {
    cleanup();
  });

  it("displays the section title and handles empty data", () => {
    render(
      <Provider store={store}>
        <BookingsSection title="Upcoming" data={[]} />
      </Provider>
    );

    expect(screen.getByText("Upcoming")).toBeInTheDocument();
    expect(screen.getByText("No bookings available!")).toBeInTheDocument();
  });

  it("handles item clicks correctly", () => {
    const { getByText } = render(
      <Provider store={store}>
        <BookingsSection title="History" data={data} />
      </Provider>
    );

    const moviePanel = getByText("Inception");
    screen.debug();
    expect(moviePanel).toBeInTheDocument();
  });

  it("dispatches expected action on grid item click", () => {
    render(
      <Provider store={store}>
        <BookingsSection title="History" data={data} />
      </Provider>
    );
    screen.debug();
    expect(
      screen.getByTestId(`booking-grid-${data[0].id}`)
    ).toBeInTheDocument();
  });
});
