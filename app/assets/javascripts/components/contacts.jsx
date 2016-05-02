class Contacts extends React.Component{
  render(){
    const contacts = this.props.contacts
    return (
      <div>{
        contacts.map( (contact) =>
        <Contact key={contact.id} contact={contact}/>
      )}</div>
    );
  }
};
