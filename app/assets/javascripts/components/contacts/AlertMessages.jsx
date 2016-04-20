const AlertMessages = React.createClass({
  getInitialState() {
    return {
      alertVisible: true
    };
  },
  handleAlertDismiss() {
    this.setState({alertVisible: false});
  },
  render() {
    if (this.state.alertVisible) {
      return (
        <Alert bsStyle="danger" onDismiss={this.handleAlertDismiss}>
          <h4>Oh snap! You got an error!</h4>
        </Alert>
      );
    }
    return <div></div>
  }
});
