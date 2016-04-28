class ContactsContainer extends React.Component {
  render () {
    return (
      <div>
        <SearchInput/>
        <Contacts contacts={this.props.contacts} />
      </div>
    );
  }
}
