import SelectCustom from '@/components/SelectCustom';
import { shallow } from 'vue-test-utils';

describe('SelectCustom.vue', () => {
  let wrapper;
  let vm;

  beforeEach(() => {
    wrapper = shallow(SelectCustom);
    vm = wrapper.vm;
  });

  it('renders itself', () => {
    expect(wrapper.name())
      .to.equal('select-custom');
  });

  it('initializes the default data', () => {
    const defaultData = SelectCustom.data();
    expect(defaultData.selectedItem).to.equal(-1);
    expect(defaultData.isDropdownActive).to.be.false;
  });

  it('renders the select option items passed as props', () => {
    wrapper.setProps({
      options: [
        { id: 0, value: 'Natxo' },
      ],
    });

    expect(wrapper.find('.select-item button').text().trim())
      .to.equal('Natxo');
  });

  it('changes isDropdownActive data on option click', () => {
    wrapper.setProps({
      options: [
        { id: 0, value: 'Natxo' },
      ],
    });

    const button = wrapper.find('.select-item button');
    button.trigger('click');

    expect(vm.selectedItem).to.equal(0);
  });

  it('shows the default \'...\' if no option has been selected', () => {
    expect(wrapper.find('.select-btn.select-dropdown-btn').text().trim())
      .to.equal('...');
  });

  it('shows the selected option if one option has been selected', () => {
    wrapper.setProps({
      options: [
        { id: 0, value: 'Natxo' },
      ],
    });

    const button = wrapper.find('.select-item button');
    button.trigger('click');

    expect(wrapper.find('.select-btn.select-dropdown-btn').text().trim())
      .to.equal('Natxo');
  });

  it('emits an input event if one option has been selected', (done) => {
    wrapper.setProps({
      options: [
        { id: 0, value: 'Natxo' },
      ],
    });

    vm.$on('input', (val) => {
      expect(val).to.equal(0);
      done();
    });

    const button = wrapper.find('.select-item button');
    button.trigger('click');
  });

  it('shows the dropdown options when the select button is clicked', () => {
    const button = wrapper.find('.select-btn.select-dropdown-btn');
    button.trigger('click');

    expect(wrapper.vm.isDropdownActive).to.be.true;
  });

  it('hides the dropdown options when clicked outside the select', () => {
    const button = wrapper.find('.select-btn.select-dropdown-btn');
    button.trigger('click');

    expect(wrapper.vm.isDropdownActive).to.be.true;

    wrapper.vm.hideDropdown();

    expect(wrapper.vm.isDropdownActive).to.be.false;
  });
});
