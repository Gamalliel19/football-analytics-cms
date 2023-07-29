import { Grid, Button, useModal, Text } from '@nextui-org/react';
import Image from 'next/image';
import CardModal from './CardModal';

export default function Card({ image_url, description, id }) {
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
            <h1>{description}</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Corporis, excepturi non voluptates ipsam illum voluptatem fugiat
              dolores consectetur vero veniam eligendi sint nobis voluptatum
              sed! Eos, quo! Amet iste ipsa animi, ducimus aliquam accusantium
              ut voluptate in repellendus! Expedita illum ut excepturi molestiae
              libero nulla nihil minima laudantium atque explicabo praesentium
              iste id assumenda dolor, ex fugiat enim! Dolor et cupiditate vero
              suscipit odio. Iusto debitis architecto unde exercitationem
              dolorem consequuntur, nulla quisquam accusamus ad officia,
              voluptatem quibusdam commodi optio odio eligendi rerum sapiente
              reiciendis molestiae maiores illum! Consectetur iusto adipisci
              nobis mollitia sed odit vel dolore neque possimus. Optio?
            </p>
            <CardModal image_url={image_url} description={description} />
          </div>
        </Grid>
      </Grid.Container>
    </>
  );
}
