var Button = React.createClass({
  render: function() {
    return (
      <div><button>Test</button></div>
      )
  }
});

React.render(<Button />, document.getElementById("root"));