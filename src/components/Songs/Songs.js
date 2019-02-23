import React, { Component } from "react";
import { connect } from "react-redux";

const Songs = ({ dispatch, songs }) => {
  console.log(songs);

  return (
    <div>
      <h1>songs</h1>
      <h1>songs</h1>
    </div>
  );
};

const mapStateToProps = ({ songs }) => ({
  songs
});

export default connect(mapStateToProps)(Songs);
