import React from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import LiveStream from './liveStream/pages'
import VideoCall from './videoCall/pages'
import Meeting from './liveStream/pages/meeting'
import Home from './home';

import { BrowserRouterHook } from './utils/use-router'
function App () {
  return (
    <BrowserRouterHook>
      <Switch>
        <Route exact path="/meeting/:name" component={Meeting}></Route>
        <Route path="/liveStream" component={LiveStream}></Route>
        <Route path="/videoCall" component={VideoCall}></Route>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouterHook>
  )
}

export default App
