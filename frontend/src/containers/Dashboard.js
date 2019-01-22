import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
// import Button from "@material-ui/core/Button";
import actions from '../state/actions/index'
import RelocateForm from '../components/forms/RelocateForm'
import StaysList from '../components/StaysList'
import Album from './Album'

class Dashboard extends React.Component {

  componentDidMount = () => {
    const { userIdSlug } = this.props.match.params
    this.props.fetchUser(userIdSlug)
  }

  renderCitiesVisited = () => {
    const { user } = this.props
    return <div>
      <StaysList user={user} viewStay={this.visitStayPage} />
      <h4 style={{ marginLeft: 20 }}>
        Cities visited:
        </h4>
      <ul>
        {user.Stays.map(stay => <li key={stay.City.id}>{stay.City.nameWithCountry}</li>)}
      </ul>
    </div>
  }

  visitStayPage = stayId => {
    this.props.history.push(`/users/${localStorage.getItem("vicariouslyId")}/album/${stayId}`);
  }

  renderDashboard = () => {
    let { firstName, location, Stays } = this.props.user

    return <div>
      <h2 style={{ marginLeft: 20 }}>
        {firstName} {location ? `is in ${location}` : 'has not taken a trip yet'}.
        </h2>
      {Stays.length > 0 && this.renderCitiesVisited()}
    </div>;
  }

  render() {
    const { user, match } = this.props
    return <div>
        {user && this.renderDashboard()}
        {!user && <h1>Loading...</h1>}
        <Switch>
          <Route exact path={`${match.path}/relocate`} component={RelocateForm} />
          {/* <Route path={`${match.path}/album/:id`} component={RelocateForm} /> */}
          {/* <Route path={`${match.path}/album`} component={Album} /> */}
        </Switch>
      </div>;
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    cities: state.cities
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: (userId) => dispatch(actions.user.fetch(userId)),
    fetchCities: () => dispatch(actions.city.fetch())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
