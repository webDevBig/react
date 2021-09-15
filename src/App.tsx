import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './components/pages/home/HomePage';
import ProjectDetails from './components/pages/project-details/ProjectDetails';
import Projects from './components/pages/projects/Projects';
import Rewards from './components/pages/rewards/Rewards';
import Footer from './elements/Footer';
import Header from './elements/Header';
import getRpcUrl from './utils/getRpcUrl';
import * as bsc from '@binance-chain/bsc-use-wallet';
import { ModalProvider } from './hooks/Modal';
import Privacy from './components/pages/privacy';
import Terms from './components/pages/terms';
import Whitepaper from './components/pages/whitepaper/Whitepaper';
import FullCalendarPage from './components/pages/calendar/FullCalendarPage';
import { Parallax, Background } from "react-parallax";
import Plx from 'react-plx';
import { render } from "react-dom";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();





function App() {
  const rpcUrl: string = getRpcUrl();
  const chainId = parseInt(process.env.REACT_APP_CHAIN_ID!, 10);

  return (
    <BrowserRouter>
      <bsc.UseWalletProvider
        chainId={chainId}
        connectors={{
          walletconnect: { rpcUrl },
          bsc,
        }}
      >
        <ModalProvider>
          <div className='App'>
            <Header />
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route exact path='/projects' component={Projects} />
              <Route exact path='/project-details' component={ProjectDetails} />
              <Route exact path='/rewards' component={Rewards} />
              <Route exact path='/privacy' component={Privacy} />
              <Route exact path='/terms' component={Terms} />
              <Route exact path='/whitepaper' component={Whitepaper} />
              <Route exact path='/full-calendar' component={FullCalendarPage} />
              
            </Switch>
            <Footer />
          </div>
        </ModalProvider>
      </bsc.UseWalletProvider>
    </BrowserRouter>
  );
}

export default App;
