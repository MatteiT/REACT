import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Error from './Error';
import About from './about';
import Product from './Products';
import SharedLayout from './SharedLayout';
import SharedProductLayout from './SharedProductLayout';
import Login from './Login';
import Dashboard from './Dashboard';
import Protected from './Protected';

const ReactRouterSetup = () => {
  const [user, setUser] = useState(null);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="/products" element={<SharedProductLayout />}>
            <Route index element={<Product />} />
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route
            path="/dashboard"
            element={
              <Protected user={user}>
                <Dashboard user={user} />
              </Protected>
            }
          />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default ReactRouterSetup;
