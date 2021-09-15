import React from 'react';
import { Box, Typography, Grid } from '@material-ui/core';
import { Container, Accordion } from 'react-bootstrap';
import { Element } from 'react-scroll';

function Faq() {
  return (
    <>
      <Element name='FAQSc'>
        <Box className='faq_sc defpddng'>
          <Container>
            <Grid container spacing={2}>
              <Grid item xs={12} className='text-center'>
                <Box className='def_h3'>
                  <Typography component='h3'>
                    Frequently asked Questions
                  </Typography>
                  <Box className='h3line' />
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box className='cstmaccrdn'>
                  <Accordion defaultActiveKey='0'>
                    <Accordion.Item eventKey='0'>
                      <Accordion.Header>
                        Will contract ownership be renounced ?
                        <span className='acc_btn'></span>
                      </Accordion.Header>
                      <Accordion.Body>
                        We will not be renouncing ownership. This limits our
                        ability to implement changes and upgrades without doing
                        a contract migration. Lot of projects never recovered
                        after the first migration from Pcs v1 to v2. This is one
                        example of many things we anticipate the need to adapt
                        to the space when will be required.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey='1'>
                      <Accordion.Header>
                        If you’re not renouncing, how can I be sure as investor
                        that I won’t scammed or rugged ?
                        <span className='acc_btn'></span>
                      </Accordion.Header>
                      <Accordion.Body>
                        Renouncing ownership has become the standard in the
                        fraud-filled BSC space but in reality it only provides
                        the illusion of safety. We have employed protection for
                        potential investors. The LP pool will be locked.Our
                        contract code has been audited for security
                        vulnerabilities. The core officer team is fully doxed{' '}
                        <br />
                        <br />
                        We are just as sick and tired of the proliferation of
                        rugs and scams as anyone else. Our mission is to change
                        this unsavory reality helping only the most legit
                        projects to raise liquidity with us. We understand trust
                        is hard to come by in this space, we only ask for the
                        opportunity to earn it from each and every investor.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey='2'>
                      <Accordion.Header>
                        Is the presale only available on Unicrypt ? Is there a
                        whitelist ?<span className='acc_btn'></span>
                      </Accordion.Header>
                      <Accordion.Body>
                        The presale will be hold on Unicrypt and this is the
                        only one we will have.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey='3'>
                      <Accordion.Header>
                        How works Unicrypt Presale ?
                        <span className='acc_btn'></span>
                      </Accordion.Header>
                      <Accordion.Body>
                        Unicrypt presale is divided in 3 rounds; Round 0, 1 and Round 2. 
                        <br /> <br />
                        Round 0: 1/3 of the presale hardcap can be sold before the sale starts by users willing to burn UNCL.
                        <br /> <br />
                        Round 1: is for Unicrypt holders, it lasts 2 hours and to participate you need 3 UNCX Tokens or 50 UNCL Tokens in your wallet.
                        <br /> <br />
                        At the ends of the 2 hours, the presale is open to everyone till the hard cap is reached or the end date.
                        <br /> <br />
                        On UniCrypt presale page you can see WBNB as currency required to buy $CXPAD, that’s not a problem you will be able to use simply BNB.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey='4'>
                      <Accordion.Header>
                        When will I receive my tokens bought in Unicrypt Presale
                        ?<span className='acc_btn'></span>
                      </Accordion.Header>
                      <Accordion.Body>
                        The tokens will be claimable from the same UniCrypt
                        presale page from where the tokens were purchased as
                        soon as the presale ends or when hard cap is reached.
                        Our team will keep the countdown updated on the Telegram
                        Group and on the website.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey='5'>
                      <Accordion.Header>
                        When Coinxpad will be listed on PancakeSwap ?
                        <span className='acc_btn'></span>
                      </Accordion.Header>
                      <Accordion.Body>
                        CoinxPad will list on PancakeSwap on xxth September or
                        as soon presale hard cap is reached.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Element>
    </>
  );
}

export default Faq;
