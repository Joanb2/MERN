import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Import Style
import styles from './About.css';

class About extends Component {
  render() {
    return (
    	<div className={styles.container}>
	    	<h2>About Me</h2>
	    	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis euismod nisi, ac mattis eros. Nullam sagittis est at eros tempus, quis pulvinar metus vulputate.
	    	 Aenean rutrum hendrerit ante non porta. Ut consectetur tortor sit amet lorem sollicitudin sodales. Donec blandit lacus non arcu lobortis sagittis. 
	    	 Ut massa tortor, eleifend scelerisque dui ut, dignissim posuere mi. Pellentesque neque ex, maximus a commodo in, finibus vel augue. Nulla condimentum lectus felis.
	    	  Curabitur quis fermentum justo. Praesent vel quam non metus auctor egestas. In rutrum, est egestas tincidunt tempor, purus sapien consequat dolor, at euismod nisl orci vitae eros. 
	    	  Morbi suscipit velit sit amet sapien sollicitudin, sed dapibus lectus feugiat. Praesent vel elit vehicula, fringilla nisi sed, bibendum enim.</p>
	    </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

About.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About);
