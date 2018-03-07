import React from 'react';
import { Link } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

export default function Root(props) {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/feed">Feed</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        {renderRoutes(props.route.routes)}
      </main>
    </div>
  );
}
