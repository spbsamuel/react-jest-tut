import React from 'react';

export default class CheckboxWithLabel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {isChecked: false};
  }

  _onChange = () => {
    this.setState({isChecked: !this.state.isChecked});
  };

  render() {
    const {isChecked} = this.state;
    const {labelOn, labelOff} = this.props;
    return (
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={this._onChange}
        />
        {isChecked ? labelOn : labelOff}
      </label>
    )
  }
}