import React, { useRef, useState, useEffect } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Box, Button, MenuItem, ListItemIcon } from '@material-ui/core';
import { Link } from 'react-scroll';
import useLocales from '../hooks/useLocales';
import MenuPopover from '../components/plugin/MenuPopover';
import { MIconButton } from '../components/plugin';
import Connect from './Connect';
import { useWallet } from '@binance-chain/bsc-use-wallet';
import { useLocation } from 'react-router-dom';
// import { Link } from 'react-router-dom'

function Header() {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 50);
    });
  }, []);
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const { allLang, currentLang, onChangeLang } = useLocales();
  const { account, connect, reset } = useWallet();
  const [activeClass, setClass] = useState(false);
  const toggleClass = () => {
    setClass(!activeClass);
  };

  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split('/');

  useEffect(() => {
    const login = async () => {
      if (!account && window.localStorage.getItem('accountStatus') !== '0') {
        connect('injected');
      }
    };
    login();
  }, [account]);
  return (
    <>
      <header className={scroll ? 'header bg-blur' : 'header'}>
        <Container>
          <Navbar bg='dark' expand='lg'>
            <Navbar.Brand>
              <a href='/' className="logo_box">
                <Box component='img' src='/images/logo512.png' alt='' className="logo_icon"/>
                <Box component='img' src='/images/logo_text.png' alt='' />
              </a>
            </Navbar.Brand>
            <Box className="hdrtlgrm">
                <a href='https://t.me/Coinxpad' target="_blank">
                  <Box component='img' src='/images/tlgrm_ic_small.svg' />
                  Join Telegram
                </a>
            </Box>
            {/* <MIconButton
              ref={anchorRef}
              onClick={() => setOpen(true)}
              className='frlng_ui'
              sx={{
                padding: 0,
                width: 44,
                height: 44,
                ...(open && { bgcolor: 'action.selected' }),
              }}
            >
              <img src={currentLang.icon} alt={currentLang.label} />
            </MIconButton>

            <MenuPopover
              open={open}
              onClose={() => setOpen(false)}
              anchorEl={anchorRef.current}
              className='frlng_drpdwn_ui'
            >
              <Box sx={{ py: 1 }}>
                {allLang.map((option) => (
                  <MenuItem
                    key={option.value}
                    selected={option.value === currentLang.value}
                    onClick={() => {
                      onChangeLang(option.value);
                      setOpen(false);
                    }}
                    sx={{ py: 1, px: 2.5 }}
                  >
                    <ListItemIcon>
                      <Box
                        component='img'
                        alt={option.label}
                        src={option.icon}
                      />
                    </ListItemIcon>
                  </MenuItem>
                ))}
              </Box>
            </MenuPopover> */}
            <Navbar.Toggle
              aria-controls='basic-navbar-nav'
              className='cstmtggl'
              onClick={toggleClass}
            />

            <Navbar.Collapse id='basic-navbar-nav' className='cstm_menu'>
              <Nav className='m-auto'>
                <Link
                  to='FeaturesSc'
                  activeClass='active'
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                >
                  Features
                </Link>
                <Link
                  to='AboutUsSc'
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                >
                  About Us
                </Link>
                <a
                  href="https://github.com/solidproof/smart-contract-audits/blob/main/SmartContract_Audit_Solidproof_CXPAD.pdf"
                  target="_blank"
                >
                  Audit
                </a>
                <a
                  href="https://github.com/solidproof/kyc-certificates/blob/main/KYC_Certificate_CXPAD.png"
                  target="_blank"
                >
                  KYC
                </a>
                <Link
                  to='TokenomicsSc'
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                >
                  Tokenomics
                </Link>
                <Link
                  to='RoadmapSc'
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                >
                  Roadmap
                </Link>
                <Link
                  to='FAQSc'
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                >
                  FAQ
                </Link>
                <a
                  href='/whitepaper'
                  className={splitLocation[1] === 'whitepaper' ? 'active' : ''}
                >
                  Whitepaper
                </a>
              </Nav>

              <Button
                component='a'
                href='/rewards'
                variant='outlined'
                color='primary'
                className='def_btn_scndr hbtn_mrgn'
              >
                Rewards Page
              </Button>
              {/* {account && <AccountPopover account={account} reset={reset} />} */}

              <Connect account={account} login={connect} logout={reset} />
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </header>
      <Box className={activeClass ? 'mnmbl0vrl show' : 'mnmbl0vrl'} />
    </>
  );
}

export default Header;
