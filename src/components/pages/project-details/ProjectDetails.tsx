import React from 'react';
import { Box } from '@material-ui/core';
import { Container } from 'react-bootstrap';
import TopInfo from './partitions/TopInfo';
import TabInfo from './partitions/TabInfo';
function ProjectDetails() {
  return (
    <>
      <Box className='prjctdtls_sc'>
        <Container>
          <TopInfo />
          <TabInfo />
        </Container>
      </Box>
    </>
  );
}

export default ProjectDetails;
