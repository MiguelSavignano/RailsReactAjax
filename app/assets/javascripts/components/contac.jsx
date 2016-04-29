class Contact extends React.Component{
  constructor(props){
    super(props)
  }
  render() {
    const contact = this.props.contact
    return (
      <Modal modalTitle={"Contacto "+contact.id } onHideModal={this.props.onHideContact} >
        <div>{contact.phone}</div>
      </Modal>
    )
  }
};
