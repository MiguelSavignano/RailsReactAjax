class AlertMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: props.visible || true }
    this.handleAlertDismiss = this.handleAlertDismiss.bind(this);
  }
  handleAlertDismiss() {
    this.setState({visible: false});
  }
  render() {
    return (
      <Alert className={this.state.visible ? '' : 'hidden'}
             bsStyle="danger"
             onDismiss={this.handleAlertDismiss}>
        <h4>Oh snap! You got an error!</h4>
      </Alert>
    );
  }
}
// class Photo extends React.Component {
//   handleDoubleTap(e) { … }
//   render() { … }
// }
// const AlertMessages = React.createClass({
//   getInitialState() {
//     return {
//       alertVisible: true
//     };
//   },
//   handleAlertDismiss() {
//     this.setState({alertVisible: false});
//   },
//   render() {
//     if (this.state.alertVisible) {
//       return (
//         <Alert bsStyle="danger" onDismiss={this.handleAlertDismiss}>
//           <h4>Oh snap! You got an error!</h4>
//         </Alert>
//       );
//     }
//     return <div></div>
//   }
// });
