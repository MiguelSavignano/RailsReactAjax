class FavoriteBtn extends React.Component {
  constructor(props){
    super(props)
    this.state = {active: false}
  }
  render () {
    _onClickHandler = (event)=> {
      this.setState({active: !this.state.active})
    }
    return (
      <a className="mdl-button mdl-js-button mdl-button--icon mdl-button" onClick={_onClickHandler}>
        <i className={"fa "+(this.state.active ? "fa-heart" : "fa-heart-o")}></i>
      </a>
    );
  }
}
