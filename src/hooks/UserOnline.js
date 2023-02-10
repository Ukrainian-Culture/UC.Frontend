import React, { useState, useEffect } from 'react'
import * as signalR from '@microsoft/signalr'
import { useDispatch, useSelector } from 'react-redux'
import {
  FETCH_ONLINE_ERROR,
  FETCH_ONLINE_SUCCESS,
} from '../redux-store/fetchUserOnline/fetchUserOnlineConst'

function UserOnline() {
  const [connection, setConnection] = useState(null)
  const dispatch = useDispatch()
  const state = useSelector((state) => state)
  // -------------------------------------------------

  useEffect(() => {
    const newConnection = new signalR.HubConnectionBuilder()
      .withUrl(`${state.startSettings.domain}/onlineUsersHuber`, {
        skipNegotiation: true,
        transport: signalR.HttpTransportType.WebSockets,
      })
      .build()

    setConnection(newConnection)
  }, [])
  // console.log(connection)
  useEffect(() => {
    if (connection) {
      connection
        .start()
        .then(() => {
          // console.log('Connected!')
          connection.on('UpdateOnlineUsers', (count) => {
            // console.log(count)
            dispatch({ type: FETCH_ONLINE_SUCCESS, payload: count })
          })
        })
        .catch((e) => {
          dispatch({ type: FETCH_ONLINE_ERROR, payload: e })
          console.log('Connection failed: ', e)
        })
    }
  }, [connection])
}

export default UserOnline
