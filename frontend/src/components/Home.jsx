import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  link,
  Redirect,
  BrowserRouter,
} from 'react-router-dom'
import { CreateRoom } from './CreateRoom'
import { RoomJoin } from './RoomJoin'
import { Room } from './Room'

export function HomePage(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<p>This is the home page</p>} />
        <Route path='/join' element={<RoomJoin></RoomJoin>} />
        <Route path='/create' element={<CreateRoom />} />
        <Route path='/room/:roomCode' element={<Room />} />
      </Routes>
    </BrowserRouter>
  )
  // return <h1> Home page {props.name}</h1>
}
