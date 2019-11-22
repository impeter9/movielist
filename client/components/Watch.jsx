import React from 'react';

const Watch = (props) => {
  return (
    <div>
      <button onClick={props.handleWatchedButton} style={{backgroundColor:props.allState.wBColor}} id="buttonWatched">Watched</button>
      <button onClick={props.handleToWatchButton} style={{backgroundColor:props.allState.tWBColor}} id="buttonToWatch">To Watch</button>
    </div>
  );
}

export default Watch;