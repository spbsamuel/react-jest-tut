import React, {Component} from 'react'
import './Link.css';

const STATUS = {
  HOVERED: 'hovered',
  NORMAL: 'normal',
};

export default class Link extends Component {
  constructor(props) {
    super(props);
    this.state = {className: STATUS.NORMAL};
  }

  _onMouseEnter = () => {
    this.setState({className: STATUS.HOVERED});
  };

  _onMouseLeave = () => {
    this.setState({className: STATUS.NORMAL});
  };

  render() {
    const {className} = this.state;
    const {page, children} = this.props;
    return (
      <a
        className={className}
        href={page || '#'}
        onMouseEnter={this._onMouseEnter}
        onMouseLeave={this._onMouseLeave}>
        {children}
      </a>
    );
  }
}