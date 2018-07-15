import React from 'react';

import { auth } from '../firebase';

const SignOutButton = () =>
  <li className="nav-item">
    <button className="btn btn-sm btn-outline-danger ml-3" onClick={auth.doSignOut}>Изход</button>
  </li>

export default SignOutButton;