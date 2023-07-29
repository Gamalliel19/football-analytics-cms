import { Grid, Link } from '@nextui-org/react';

export default function Navbar() {
  let login = true;

  return (
    <>
      <Grid.Container gap={2} justify='center'>
        <Grid
          xs={12}
          md={2}
          css={{ border: '1px solid #222222' }}
          justify='center'
        >
          <Link href='/'>TIMELINE</Link>
        </Grid>
        <Grid
          xs={12}
          md={8}
          css={{ border: '1px solid #222222' }}
          justify='center'
        >
          <h1>Gamsky Football Analysis</h1>
        </Grid>
        <Grid
          xs={12}
          md={2}
          css={{ border: '1px solid #222222' }}
          justify='center'
        >
          {!login ? (
            <Link href='/login'>LOGIN</Link>
          ) : (
            <Link href='/input-form'>ADD DATA</Link>
          )}
        </Grid>
      </Grid.Container>
    </>
  );
}
