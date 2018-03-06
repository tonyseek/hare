import React from 'react';
import { Link } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

export default function Root(props) {
  return (
    <div>
      <header>
        <Link to="/">Home</Link>
        <Link to="/feed">Feed</Link>
      </header>
      <main>
        {renderRoutes(props.route.routes)}
      </main>
    </div>
  );
}
