import App from '@/App';
import TodoList from '@/components/TodoList';
import { shallow } from 'vue-test-utils';

describe('App.vue', () => {
  it('should display the app header', () => {
    const wrapper = shallow(App);

    expect(wrapper.find('.header h1').text())
      .to.equal('¿Qué Hacer?');
  });

  it('should display the extended version', () => {
    const wrapper = shallow(App);

    expect(wrapper.find('span.header-version').text())
      .to.equal('versión extendida');
  });

  it('renders the TodoList component', () => {
    const wrapper = shallow(App);
    expect(wrapper.contains(TodoList))
      .to.be.true;
  });
});
