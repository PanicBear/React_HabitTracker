import React, { Component } from 'react';

// 목록 업데이트 시 항상 갱신되기에 pureComponent의 의미가 없다
class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <i className="navbar-logo fas fa-leaf"></i>
        <span>Habit Tracker</span>
        <span className="navbar-count">{this.props.totalCount}</span>
      </div>
    );
  }
}

export default Navbar;
