import { render, screen } from '@testing-library/react';
import App from './App';
import Home from './components/home/home';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


describe("Estructura", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = render(<Home />);
    });
    it("Renderiza un <div>", () => {
      expect(wrapper.find("div")).toHaveLength(1);
    })
    xit('render its children', () => {
      wrapper.getByText('welcome')
    })  
  })
