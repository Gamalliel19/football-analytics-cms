import { Grid } from '@nextui-org/react';
import Image from 'next/image';
import CardModal from './CardModal';

export default function Card({ title, image_url, description, id, likes }) {
  return (
    <>
      <Grid.Container justify='center'>
        <Grid
          xs={12}
          md={5}
          css={{ border: '1px solid #222222' }}
          justify='center'
        >
          <Image
            src={image_url}
            alt={`${id} - ${description}`}
            objectFit='contain'
            width={0}
            height={0}
            style={{ width: '100%', height: '100%' }}
          />
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
            <h1>{title}</h1>
            <p>{description}</p>
            <CardModal
              image_url={image_url}
              description={description}
              title={title}
              likes={likes}
            />
          </div>
        </Grid>
      </Grid.Container>
    </>
  );
}
