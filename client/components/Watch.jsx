import React from 'react';

const Watch = (props) => {
  return (
    <div>
      <button onClick={props.handleWatchedButton} id="buttonWatched">Watched</button>
      <button onClick={props.handleToWatchButton} id="buttonToWatch">To Watch</button>
    </div>
  );
}

export default Watch;

//style={ cursor: {this.state.class} } {props.allState.watchedButton? lightgreen || null;}
// {props.allState.toWatchButton? lightgreen || null;}


// class = {props.allState.watchedButton? lightgreen || null}