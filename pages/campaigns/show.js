import React, { Component } from "react";
import Layout from "../../components/Layout";

class CampaignShow extends Component {
  static async getInitialProps(props) {
    console.log(props.query.address);

    return {};
  }

  render() {
    return (
      <Layout>
        <h1>Campaign Show</h1>
      </Layout>
    );
  }
}

export default CampaignShow;
