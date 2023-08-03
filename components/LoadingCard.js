import { Grid } from '@nextui-org/react';

export default function LoadingCard() {
  return (
    <>
      <Grid.Container justify='center'>
        <Grid
          xs={12}
          md={5}
          css={{ border: '1px solid #222222' }}
          justify='center'
        >
          <div
            style={{
              height: '500px',
              width: '100%',
              backgroundColor: '#f1f1f1',
            }}
          ></div>
        </Grid>
        <Grid
          xs={12}
          md={7}
          css={{ border: '1px solid #222222' }}
          alignContent='center'
          justify='center'
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              width: '100%',
              height: '100%',
              padding: '16px',
            }}
          >
            <div
              style={{
                height: '100px',
                width: '300px',
                backgroundColor: '#f1f1f1',
              }}
            ></div>
            <div
              style={{
                height: '300px',
                width: '100%',
                backgroundColor: '#f1f1f1',
              }}
            ></div>
            {/* <p>test</p> */}
          </div>
        </Grid>
      </Grid.Container>
    </>
  );
}
