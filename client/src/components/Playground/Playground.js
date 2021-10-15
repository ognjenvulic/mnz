import React, {useEffect, useState} from 'react';

function Playground(props) {
  const [title, setTitle] = useState('');

  useEffect(() => {
    setTitle("Initialized");
  }, []);

  return (
    <React.Fragment>
    <div>{`PLAYGROUND ${title}`}</div>
    </React.Fragment>
  );

}

Playground.defaultProps = {};

Playground.propTypes = {};

export default Playground;