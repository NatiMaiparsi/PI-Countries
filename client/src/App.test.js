import { render, screen } from '@testing-library/react';
import { configure, EnzymeAdapter, shallow } from 'enzyme';
import { isValidElement } from 'react';
import App from './App';
import AddActivity from './components/addActivity';
configure({ adapter: new EnzymeAdapter() });

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe("<AddActivity />", () => {
  describe("Estructura", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<AddActivity />);
    });
    it("Renderiza un <form>", () => {
      expect(wrapper.find("form")).toHaveLength(1);
    });

    it('Renderiza un label con el texto igual a "Activity: "', () => {
      expect(wrapper.find("label").at(0).text()).toEqual("Activity: ");
    });

    it('Renderiza un input con la propiedad "name" igual a "name"', () => {
      expect(wrapper.find('input[name="name"]')).toHaveLength(1);
    });

    it('Renderiza un label con el texto igual a "Dificulty (1 to 5): "', () => {
      // El orden en el que se encuentran los Labels es importante.
      expect(wrapper.find("label").at(1).text()).toEqual("Dificulty (1 to 5): ");
    });

    it('Renderiza un label con el texto igual a "Duration: "', () => {
      // El orden en el que se encuentran los Labels es importante.
      expect(wrapper.find("label").at(2).text()).toEqual("Duration: ");
    });

    it('Renderiza un input con la propiedad "name" igual a "dificulty"', () => {
      expect(wrapper.find('input[name="dificulty"]')).toHaveLength(1);
    });

    it('Renderiza un label con el texto igual a "Season: "', () => {
      expect(wrapper.find("label").at(3).text()).toEqual("Season: ");
    });

    it('Renderiza un input con la propiedad "name" igual a "duration"', () => {
      expect(wrapper.find('input[name="duration"]')).toHaveLength(1);
    });

    it('Renderiza un boton con el "type" "submit"', () => {
      expect(wrapper.find('button[type="submit"]')).toHaveLength(1);
    });
  });})
