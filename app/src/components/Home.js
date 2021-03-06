import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export class Home extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <p>Home - <Link to="about">About</Link></p>
        <img width="200" className="main-image" src={require('@/assets/images/logo.svg')} />
      </div>
    );
  }
}

export default connect(state => state)(Home);