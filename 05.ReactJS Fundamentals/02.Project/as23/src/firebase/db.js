import { db } from './firebase';

// Users API - create and get users

export const doCreateUser = (id, username, email) =>
  db.ref(`users/${id}`).set({
    username,
    email,
    roles: { isAdmin: false }
  });

export const onceGetUsers = () =>
  db.ref('users').once('value');

// Players API - craete, get and delete players

export const doCreatePlayer = (firstName, lastName) =>
  db.ref(`players`).push({
    firstName,
    lastName,
  });

export const doDeletePlayer = (key) =>
  db.ref('players').child(key).remove();

export const onceGetPlayers = () =>
  db.ref('players').once('value');



