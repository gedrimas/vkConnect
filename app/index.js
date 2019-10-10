import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'
import './index.css';
import connect from '@vkontakte/vk-connect'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'

import {vkMethods} from './assets/vkMeth'


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 10px 10px 10px;
`
const ResultWrapper = styled.div`
display: flex;
justify-content: center;
margin: 10px 10px 10px 10px;
`
  
connect.send("VKWebAppInit", {})

const App = () => {
        
const [vkRes, setvkRes] = useState('vk')
const [vkMethodType, setVkMethodType] = useState('0')
const [params, setParams] = useState({})

useEffect(() => {
  let vkEv = {}
  connect.subscribe((e) => {
    vkEv = e
    const result = parseVkResponse(vkEv.detail)
    setvkRes(result)
  }
  
  )
  return () => {
    connect.unsubscribe()
  }    
}, [vkMethodType])



const parseJF = (json) => {
  const arr = []
  for(let key in json) {
    if(typeof json[key] === 'object'){
      arr.push([ key, parseJF(json[key]) ])
    }else{
      arr.push([key, json[key]])
    }
  }
return arr  
}

const getJSX = (testArry) => {
  return (
    <ul>
      {
        testArry.map(itm => 
          <li>
            {itm[0]} : {
              typeof itm[1] === 'object' ? (<ul> {getJSX(itm[1])}</ul>) : (<span>{itm[1]}</span>) 
            } 
          </li>
          )
      }
    </ul>
  )
}

const parseVkResponse = (vkResponse) => {
  const vkResInArr = parseJF(vkResponse)
  const vkResInJSX = getJSX(vkResInArr)
  return vkResInJSX
}

const vkMethodSetter = (vkMethodName, params) => {
  switch(vkMethodName){
    case 'VKWebAppGetUserInfo':
      connect.send("VKWebAppGetUserInfo", {})
      setVkMethodType('VKWebAppGetUserInfo')
      break
    case 'VKWebAppGetPhoneNumber':
      connect.send('VKWebAppGetPhoneNumber', {})
      setVkMethodType('VKWebAppGetPhoneNumber')
      break
    case 'VKWebAppGetEmail':
      connect.send('VKWebAppGetEmail', {})
      setVkMethodType('VKWebAppGetEmail')
      break
    case 'VKWebAppGetGeodata':
      connect.send("VKWebAppGetGeodata", {})
      setVkMethodType('VKWebAppGetGeodata')
      break
    case 'VKWebAppOpenContacts':
      connect.send("VKWebAppOpenContacts", {})
      setVkMethodType('VKWebAppOpenContacts')
      break
    case 'VKWebAppGetAuthToken':
      connect.send("VKWebAppGetAuthToken", params)
      setVkMethodType('VKWebAppGetAuthToken')
      break

      case 'VKWebAppGetAuthToken2':
        connect.send("VKWebAppGetAuthToken", params)
        setVkMethodType('VKWebAppGetAuthToken')
        break

    case 'VKWebAppCallAPIMethod':
      connect.send("VKWebAppCallAPIMethod", params)
      setVkMethodType('VKWebAppCallAPIMethod')
      break
    case 'VKWebAppShare':
      connect.send("VKWebAppShare", params)
      setVkMethodType('VKWebAppShare')
      break
    case 'VKWebAppShowWallPostBox':
      connect.send("VKWebAppShowWallPostBox", params)
      setVkMethodType('VKWebAppShowWallPostBox')
      break
    case 'VKWebAppGetClientVersion':
      connect.send("VKWebAppGetClientVersion", {})
      setVkMethodType('VKWebAppGetClientVersion')
      break
    case 'VKWebAppOpenPayForm':
      connect.send("VKWebAppOpenPayForm", params)
      setVkMethodType('VKWebAppOpenPayForm')
      break
    case 'VKWebAppAllowNotifications':
      connect.send("VKWebAppAllowNotifications", {})
      setVkMethodType('VKWebAppAllowNotifications')
      break
    case 'VKWebAppSetLocation':
      connect.send("VKWebAppSetLocation", params)
      setVkMethodType('VKWebAppSetLocation')
      break
    case 'VKWebAppAllowMessagesFromGroup':
      connect.send("VKWebAppAllowMessagesFromGroup", params)
      setVkMethodType('VKWebAppAllowMessagesFromGroup')
      break
    case 'VKWebAppJoinGroup':
      connect.send("VKWebAppJoinGroup", params)
      setVkMethodType('VKWebAppJoinGroup')
      break
    case 'VKWebAppOpenQR':
      connect.send("VKWebAppOpenQR")
      setVkMethodType('VKWebAppOpenQR')
      break
    case 'VKWebAppOpenApp':
      connect.send("VKWebAppOpenApp", params)
      setVkMethodType('VKWebAppOpenApp')
      break
    case 'VKWebAppSetViewSettings':
      connect.send("VKWebAppSetViewSettings", params)
      setVkMethodType('VKWebAppSetViewSettings')
      break
    case 'VKWebAppScroll':
      connect.send("VKWebAppScroll", params)
      setVkMethodType('VKWebAppScroll')
      break
    case 'VKWebAppResizeWindow':
      connect.send("VKWebAppResizeWindow", params)
      setVkMethodType('VKWebAppResizeWindow')
      break
    case 'VKWebAppGetPersonalCard':
      connect.send("VKWebAppGetPersonalCard", params)
      setVkMethodType('VKWebAppGetPersonalCard')
      break
    case 'VKWebAppGetFriends':
      connect.send("VKWebAppGetFriends", {})
      setVkMethodType('VKWebAppGetFriends')
      break
    case 'VKWebAppFlashGetInfo':
      connect.send("VKWebAppFlashGetInfo", {})
      setVkMethodType('VKWebAppFlashGetInfo')
      break
    case 'VKWebAppFlashSetLevel':
      connect.send("VKWebAppFlashSetLevel", params)
      setVkMethodType('VKWebAppFlashSetLevel')
      break
    case 'VKWebAppAddToCommunity':
      connect.send("VKWebAppAddToCommunity", {})
      setVkMethodType('VKWebAppAddToCommunity')
      break
    case 'VKWebAppGetCommunityAuthToken':
      connect.send("VKWebAppGetCommunityAuthToken", params)
      setVkMethodType('VKWebAppGetCommunityAuthToken')
      break
    case 'VKWebAppAddToFavorites':
      connect.send("VKWebAppAddToFavorites", {})
      setVkMethodType('VKWebAppAddToFavorites')
      break
    case 'VKWebAppTapticNotificationOccurred':
      connect.send("VKWebAppTapticNotificationOccurred", params)
      setVkMethodType('VKWebAppTapticNotificationOccurred')
      break
    case 'VKWebAppTapticSelectionChanged':
      connect.send("VKWebAppTapticSelectionChanged", {})
      setVkMethodType('VKWebAppTapticSelectionChanged')
      break
    case 'VKWebAppTapticImpactOccurred':
      connect.send("VKWebAppTapticImpactOccurred", params)
      setVkMethodType('VKWebAppTapticImpactOccurred')
      break
    case 'VKWebAppShowImages':
        connect.send("VKWebAppShowImages", params)
      setVkMethodType('VKWebAppShowImages')
      break
    case 'VKWebAppSendPayload':
      connect.send("VKWebAppSendPayload", params)
      setVkMethodType('VKWebAppSendPayload')
      break
    case 'VKWebAppStorageGet':
      connect.send("VKWebAppStorageGet", params)
      setVkMethodType('VKWebAppStorageGet')
      break
    case 'VKWebAppStorageSet':
      connect.send("VKWebAppStorageSet", params)
      setVkMethodType('VKWebAppStorageSet')
      break
    case 'VKWebAppStorageGetKeys':
      connect.send("VKWebAppStorageGetKeys", params)
      setVkMethodType('VKWebAppStorageGetKeys')
      break  
  }
}

const chunkedArr = []
const chunkButtons = ([a, b, c, ...rest]) => {
  if(a) {
    chunkedArr.push([a, b, c]) 
    chunkButtons(rest)
  }
}

chunkButtons(vkMethods)

  return(
    <Wrapper>
      <ButtonsWrapper>
        <div 
          className="d-flex flex-column"
          style={{width: '770px'}}
        >
        {
          chunkedArr.map(itm => (
            <ButtonGroup size="sm" className="mt-3">
              <Button onClick={() => vkMethodSetter(itm[0], params)}>{itm[0]}</Button>
              <Button onClick={() => vkMethodSetter(itm[1], params)}>{itm[1]}</Button>
              <Button onClick={() => vkMethodSetter(itm[2], params)}>{itm[2]}</Button>
              <Button onClick={() => vkMethodSetter(itm[3], params)}>{itm[3]}</Button>
            </ButtonGroup>
          ))
        }  
        </div> 
      </ButtonsWrapper>
      <ResultWrapper>
        <Form style={{ width: '770px' }}>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Params in JSON (<a href="https://vk.com/dev/vk_connect_events">see VK Connect</a>)</Form.Label>
            <Form.Control 
              as="textarea" 
              rows="3" 
              placeholder='{"app_id": 4936321, "group_id": 184317159, "scope": "messages"}'
              onChange={e => setParams(JSON.parse(e.target.value))}
            />
          </Form.Group>
        </Form>
      </ResultWrapper>
      <ResultWrapper>
        <br />
          <Card bg="info" text="white" style={{ width: '770px' }}>
            {vkRes}
          </Card>
      </ResultWrapper> 
    </Wrapper>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
