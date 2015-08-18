var React = require('react');
var CommentBox = require('./CommentBox.jsx');
var data = require('./data');

React.render(
  <CommentBox data={data}/>,
  document.getElementById('content')
);
