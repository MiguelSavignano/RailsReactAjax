class Contact extends React.Component{
  constructor(props){
    super(props)
    this.state = {isModalShow: false}
  }
  onClickHandler = (event) => {
    this.setState({isModalShow: true})
  }
  render() {
    const contact = this.props.contact
    return (
      <div className="contact well col-md-6" onClick={this.onClickHandler}>
        <div className="row">
          <div className="col-md-4">
            <img className="img-thumbnail" height="80%" src={contact.avatar} width="80%" />
          </div>
          <div className="col-md-8">
            <ul className="list-group">
              <li className="list-group-item">
                <i className="fa fa-phone" />
                <a>{contact.phone}</a>
              </li>
              <li className="list-group-item">
                <i className="fa fa-envelope" />
                <a>{contact.email}</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <i className="fa fa-star-o" />
          <strong>{contact.name}</strong>
        </div>
        {this.state.isModalShow && <Modal modalTitle={"Contacto "+contact.id } onHideModal={this.props.onHideContact} >
          <div>{contact.phone}</div>
        </Modal>}
      </div>
    )
  }
};
