import TodoList from '@/components/TodoList';
import SelectCustom from '@/components/SelectCustom';
import { shallow } from 'vue-test-utils';

describe('TodoList.vue', () => {
  let wrapper;
  let vm;

  beforeEach(() => {
    wrapper = shallow(TodoList);
    vm = wrapper.vm;
  });

  it('renders itself', () => {
    expect(wrapper.name())
      .to.equal('todo-list-extended');
  });

  it('initializes the default data', () => {
    const options = [
      { id: 0, value: 'Natxo' },
      { id: 1, value: 'Borja' },
      { id: 2, value: 'Sergio' },
      { id: 3, value: 'Nani' },
    ];
    const defaultData = TodoList.data();
    expect(defaultData.options).to.deep.equal(options);
  });

  it('renders the SelectCustom component', () => {
    wrapper.setData({
      todos: [
        {
          id: 0,
          description: 'Testing 0...',
          completed: false,
        },
      ],
    });

    const selectWrapper = wrapper.find(SelectCustom);
    expect(selectWrapper.is(SelectCustom)).to.be.true;
  });

  it('passes the "options" data to SelectCustom', () => {
    wrapper.setData({
      todos: [
        {
          id: 0,
          description: 'Testing 0...',
          completed: false,
        },
      ],
    });

    const selectWrapper = wrapper.find(SelectCustom);
    expect(selectWrapper.hasProp('options', wrapper.vm.options)).to.be.true;
  });

  it('update the "todo owner" data to the id emitted by SelectCustom', () => {
    wrapper.setData({
      todos: [
        {
          id: 0,
          description: 'Testing 0...',
          completed: false,
        },
      ],
    });

    const selectWrapper = wrapper.find(SelectCustom);
    selectWrapper.vm.$emit('input', 1);
    expect(vm.todos[0].owner).to.equal(1);
  });
});
