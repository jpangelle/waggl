import React from 'react';
import axios from 'axios';
import { Card, Divider, Row, Col, Icon, message } from 'antd';
import { connect } from 'react-redux';

class OrgProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      org: this.props.profile.org,
      dogs: this.props.profile.dog,
      request: [],
    };
  }

  componentDidMount() {
    console.log('PROPS:', this.props);
    this.getOrgDogs();
  }

  getOrgDogs() {
    axios.get('/orgInfo', {
      params: {
        type: 'orgId',
        value: this.state.org.id,
      },
    })
      .then((response) => {
        console.log('Successful rendering of dogs!', response);
        this.setState({
          request: response.data.orgDogs,
        });
      })
      .catch((error) => {
        console.log('error adding dog', error);
      });
  }

  render() {
    const phone = `(${this.state.org.phone.slice(0, 3)}) ${this.state.org.phone.slice(3, 6)}-${this.state.org.phone.slice(6)}`;
    let stage = this.state.dogs.lifestage.charAt(0).toUpperCase() + this.state.dogs.lifestage.slice(1);
    if (this.state.dogs.age) {
      stage += ` (age ${this.state.dogs.age})`;
    }
    return (
      <div>

              <Card>
              <h1> {this.state.org.name} </h1>
              <span style={{ fontWeight: 600, fontSize: 16, marginLeft: 5 }} > Organization Profile </span>
              <Divider type="vertical" />
              <span style={{ fontWeight: 600, fontSize: 16 }} > Username: {this.state.org.username} </span>

              <Divider />

              <h2> Location </h2>

              <h3 style={{ marginLeft: 20 }}> Address </h3>
              <div style={{ marginLeft: 20 }}> {this.state.org.address} </div>
              <div style={{ marginLeft: 20 }}> {this.state.org.city}, {this.state.org.state} {this.state.org.zipcode} </div>

              <h2 style={{ marginTop: 20 }} > Contact Info </h2>

              <h3 style={{ marginLeft: 20 }}> Phone & E-mail </h3>
              <div style={{ marginLeft: 20 }} > {phone} </div>
              <div style={{ marginLeft: 20 }} > {this.state.org.email} </div>
            </Card>

              {/* <Card
                style={{ width: 200 }}
                cover={<img
                  alt="pupper"
                  src={this.state.dogs.photo}
                />}
              >
                <Card.Meta title={this.state.dogs.name} />
                <div style={{ marginTop: 10 }}>
                  <span> {this.state.dogs.breed} {this.state.dogs.mix ? 'mix' : ''} </span>
                  <Divider type="vertical" />
                  <span> {this.state.dogs.male ? 'Male' : 'Female'} </span>
                  <Divider type="vertical" />
                  <span> {stage} </span>
                </div>
              </Card>
              <Card
                style={{ width: 200 }}
                cover={<img
                  alt="pupper"
                  src={this.state.dogs.photo}
                />}
              >
                <Card.Meta title={this.state.dogs.name} />
                <div style={{ marginTop: 10 }}>
                  <span> {this.state.dogs.breed} {this.state.dogs.mix ? 'mix' : ''} </span>
                  <Divider type="vertical" />
                  <span> {this.state.dogs.male ? 'Male' : 'Female'} </span>
                  <Divider type="vertical" />
                  <span> {stage} </span>
                </div>
              </Card>

              <Card
                style={{ width: 300 }}
                cover={<img
                alt="pupper"
                src={this.state.dogs.photo}
              />}
              >
                <Card.Meta title={this.state.dogs.name} />
                <div style={{ marginTop: 10 }}>
                <span> {this.state.dogs.breed} {this.state.dogs.mix ? 'mix' : ''} </span>
                <Divider type="vertical" />
                <span> {this.state.dogs.male ? 'Male' : 'Female'} </span>
                <Divider type="vertical" />
                <span> {stage} </span>
              </div>
              </Card> */}
 

      </div>
    );
  }
}


const mapStateToProps = (state) => {
  console.log('STATE', state);
  return state;
};

export default connect(mapStateToProps, null)(OrgProfile);
