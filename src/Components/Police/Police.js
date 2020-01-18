import React from 'react';
import { connect } from 'react-redux';
import { database, auth } from '../constants/constants';
import { changeAuthState } from '../actions/actions';

const dbRef = database.ref('Reports');

const mapStateToProps = state => {
	return {
		auth: state.auth,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		changeAuthState: val => dispatch(changeAuthState(val)),
	}
}

class Police extends React.Component{

    constructor() {
        super();
        this.state = {
            data: {},
        }
    }

    componentDidMount(){
        dbRef.on('value', (snapshot) => {
            this.setState({ data: snapshot.val() });
        })
    }

	logout = () => {
		auth.signOut()
		.then(() => {
            dbRef.off();
			this.props.changeAuthState(false);
		})
	}

    render(){
        console.log(this.state.data);
        return <div>
            <div onClick={this.logout} className='pointer'>Log Out</div>
        </div>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Police);
