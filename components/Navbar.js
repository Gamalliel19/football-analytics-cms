import { Grid, Link } from '@nextui-org/react';

// Navbar


export default function Navbar() {
  let login = true;

  return (
    <>
      <Grid.Container gap={2} justify='center' alignContent='center'>
        <Grid
          xs={12}
          md={2}
          css={{
            border: '1px solid #222222',
            cursor: 'pointer',
            color: '#222',
            '&:hover': { backgroundColor: '#222', color: '#f5f5f5' },
          }}
          justify='center'
        >
          <Link
            css={{
              alignItems: 'center',
              color: 'inherit',
              '&:hover': { backgroundColor: '#222', color: '#f5f5f5' },
            }}
            href='/'
          >
            ANALYSIS
          </Link>
        </Grid>
        <Grid
          xs={12}
          md={8}
          css={{ border: '1px solid #222222' }}
          justify='center'
        >
          <h1>Sportify</h1>
        </Grid>
        <Grid
          css={{
            border: '1px solid #222222',
            cursor: 'pointer',
            color: '#222',
            '&:hover': { backgroundColor: '#222', color: '#f5f5f5' },
          }}
          xs={12}
          md={2}
          justify='center'
        >
          {!login ? (
            <Link
              css={{
                alignItems: 'center',
                color: 'inherit',
                '&:hover': { backgroundColor: '#222', color: '#f5f5f5' },
              }}
              href='/login'
            >
              LOGIN
            </Link>
          ) : (
            <Link
              css={{
                alignItems: 'center',
                color: 'inherit',
                '&:hover': { backgroundColor: '#222', color: '#f5f5f5' },
              }}
              href='/input-form'
            >
              ADD DATA
            </Link>
          )}
        </Grid>
      </Grid.Container>
    </>
  );
}
