// material
import { alpha, experimentalStyled as styled } from '@material-ui/core/styles';
import { Popover, PopoverProps } from '@material-ui/core';

// ----------------------------------------------------------------------

const ArrowStyle = styled('span')(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    top: -7,
    zIndex: 1,
    width: 12,
    right: 20,
    height: 12,
    content: "''",
    position: 'absolute',
    borderRadius: '0 0 4px 0',
    transform: 'rotate(-135deg)',
    background: '#355ab3',
    borderRight: `solid 1px ${alpha(theme.palette.grey[500], 0.12)}`,
    borderBottom: `solid 1px ${alpha(theme.palette.grey[500], 0.12)}`
  }
}));

// ----------------------------------------------------------------------

export default function MenuPopover({ children, sx, ...other }: PopoverProps) {
  return (
    <Popover
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right'
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      PaperProps={{
        sx: {
          mt: 1.5,
          ml: 0.5,
          overflow: 'inherit',
          width: 80,
          background: '#355ab3',
          ...sx
        }
      }}
      {...other}
    >
      <ArrowStyle />

      {children}
    </Popover>
  );
}
