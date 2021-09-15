import React from 'react';
import { Box } from '@material-ui/core';
import { Container } from 'react-bootstrap';
import ProjectsOpen from './partitions/ProjectsOpen';
function Projects() {
  return (
    <>
      <Box className='prjct_sc'>
        <Container>
          <ProjectsOpen />
        </Container>
      </Box>
    </>
  );
}

export default Projects;
