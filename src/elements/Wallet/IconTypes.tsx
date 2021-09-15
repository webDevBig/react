import { Box, BoxProps } from "@material-ui/core";

// ----------------------------------------------------------------------

interface IconTypeProps extends BoxProps {
  src: string;
}

export default function IconType({
  src,
  color = "inherit",
  sx,
}: IconTypeProps) {
  return (
    <Box
      component="span"
      sx={{
        width: 24,
        height: 24,
        background: `url(${src}) no-repeat center / contain`,
      }}
    />
  );
}
