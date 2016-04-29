const Modal = React.createClass({
  componentDidMount(){
    $(ReactDOM.findDOMNode(this)).modal('show');
    $(ReactDOM.findDOMNode(this)).on('hidden.bs.modal', this.props.onHideModal);
  },
  render(){
  	return (
        <div className="modal fade">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 className="modal-title">{this.props.modalTitle}</h4>
              </div>
              <div className="modal-body">
                {this.props.children}
              </div>
            </div>
          </div>
        </div>
      )
  },
  propTypes:{
  	onHideModal: React.PropTypes.func.isRequired
  }
});
