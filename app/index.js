import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'
import './index.css';
import connect from '@vkontakte/vk-connect'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'

import {vkMethods, vkMethodSetter} from './assets/vkMeth'
import { vkJsonParams } from './assets/vkJsonParams'


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
const [vkMethodType, setVkMethodType] = useState('')
const [params, setParams] = useState({})
const [inputValue, setInputValue] = useState('')

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

const inputHandler = (input) => {
  setInputValue(input)
  setParams(JSON.parse(input))
}

const sendJSONtoVk = () => {
  connect.send(vkMethodType, params)
}

const chunkedArr = []
const chunkButtons = ([a, b, c, ...rest]) => {
  if(a) {
    chunkedArr.push([a, b, c]) 
    chunkButtons(rest)
  }
}

chunkButtons(vkMethods)
console.log('inputValue', inputValue)
console.log('vkMethodType', vkMethodType)

//console.log('params', params)
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
              <Button onClick={() => vkMethodSetter(itm[0], params, setVkMethodType, connect, setInputValue)}>{itm[0]}</Button>
              <Button onClick={() => vkMethodSetter(itm[1], params, setVkMethodType, connect, setInputValue)}>{itm[1]}</Button>
              <Button onClick={() => vkMethodSetter(itm[2], params, setVkMethodType, connect, setInputValue)}>{itm[2]}</Button>
              <Button onClick={() => vkMethodSetter(itm[3], params, setVkMethodType, connect, setInputValue)}>{itm[3]}</Button>
            </ButtonGroup>
          ))
        }  
        </div> 
      </ButtonsWrapper>
      <ResultWrapper>
        <Form style={{ width: '770px' }}>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            {
              vkMethodType ? <Button variant="outline-primary" onClick={() => sendJSONtoVk()}>{vkMethodType}</Button> :
              <Button variant="outline-danger">VK method is not chosen</Button>
            }  
            < br/>
            <Form.Label>Params in JSON (<a href="https://vk.com/dev/vk_connect_events">see VK Connect</a>)</Form.Label>
            <Form.Control 
              as="textarea" 
              rows="3" 
              //placeholder='{"app_id": 4936321, "group_id": 184317159, "scope": "messages"}'
              //onChange={e => setParams(JSON.parse(e.target.value))}
              onChange={e => inputHandler(e.target.value)}
              value={inputValue}
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
