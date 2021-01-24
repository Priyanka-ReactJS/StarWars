import { render, screen } from '@testing-library/react';
import { useDispatch } from "react-redux";

import LastMovieStory from './component/LastMovie-story';
import { getFilmsByCharacter } from "./store/actions/films";
const dispatch = useDispatch();

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch
}));

test('renders learn react link', () => {

  // console.log(dispatch(getFilmsByCharacter('http://swapi.dev/api/people/1/')))
  render(<LastMovieStory />);
  describe("Title TextField", () => {
    it("Should capture title correctly onChange", () => {
        const title = wrapper.find("filled-basic").at(0);
        title.instance().value = "Test";
        title.simulate("change");
        expect(setState).toHaveBeenCalledWith("Test");
    });
});
  expect(linkElement).toBeInTheDocument();
});
