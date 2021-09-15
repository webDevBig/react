import React, { useEffect, useState } from 'react';
import { Box, Grid } from '@material-ui/core';
import { Container } from 'react-bootstrap';
import RewardScOne from './partitions/RewardScOne';
import RewardScTwo from './partitions/RewardScTwo';
import RewardScThree from './partitions/RewardScThree';
import RewardScFour from './partitions/RewardScFour';
import { useRewardContarct } from '../../../hooks/useContract';
import { useWallet } from '@binance-chain/bsc-use-wallet';
import useWeb3 from '../../../hooks/useWeb3';

function Rewards() {
  const { account } = useWallet();
  const rewardContarct = useRewardContarct();
  const [totalPaid, setTotalPaid] = useState('0');
  const [yourHolding, setYourHolding] = useState(0);
  const [USDTYou, setUSDTYou] = useState('0');
  const [lastPayout, setLastPayout] = useState(0);
  const [pendingPayout, setPendingPayout] = useState(0);
  const [position, setPosition] = useState(0);
  const web3 = useWeb3();

  useEffect(() => {
    const getTotalPaid = async () => {
      const total_paid = await rewardContarct.methods
        .getTotalDividendsDistributed()
        .call();
      setTotalPaid(
        parseFloat(web3.utils.fromWei(total_paid, 'ether')).toFixed(4)
      );
    };
    const holding = async () => {
      const your_holding = await rewardContarct.methods
        .balanceOf(account)
        .call();
      setYourHolding(your_holding);
    };
    const USDTtoYou = async () => {
      const USDT_You = await rewardContarct.methods
        .getAccountDividendsInfo(account)
        .call();
      console.log(USDT_You);
      setPosition(USDT_You[1]);
      setUSDTYou(
        parseFloat(web3.utils.fromWei(USDT_You[4], 'ether')).toFixed(4)
      );
      setLastPayout(USDT_You[5]);
    };
    const lastPayout = async () => {
      // const last_payout = await rewardContarct.methods
      //   .getAccountDividendsInfo(account)
      //   .call();
      // setLastPayout(last_payout);
    };
    const pendingPayout = async () => {
      const pending_payout = await rewardContarct.methods
        .withdrawableDividendOf(account)
        .call();
      setPendingPayout(pending_payout);
    };
    if (account) {
      getTotalPaid();
      holding();
      USDTtoYou();
      lastPayout();
      pendingPayout();
    }
  }, [account]);
  return (
    <>
      <Box className='rwrds_sc'>
        <Container>
          <Grid container spacing={2}>
            {/* <Grid item xs={12}>
              <RewardScOne />
            </Grid> */}
            <Grid item xs={12}>
              <RewardScTwo totalPaid={totalPaid} />
            </Grid>
            <Grid item xs={12}>
              <RewardScThree
                yourHolding={yourHolding}
                USDTYou={USDTYou}
                lastPayout={lastPayout}
                pendingPayout={pendingPayout}
                position={position}
              />
            </Grid>
            <Grid item xs={12}>
              <RewardScFour />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Rewards;
