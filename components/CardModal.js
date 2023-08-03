import { Modal, useModal, Button, Grid } from '@nextui-org/react';
import Image from 'next/image';
import { useMutation, gql } from '@apollo/client';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ADD_LIKES = gql`
  mutation AddLike($id: ID!) {
    addLike(id: $id) {
      id
      title
      likes
      image_url
      description
    }
  }
`;

export default function CardModal({
  title,
  likes,
  image_url,
  description,
  id,
}) {
  const { setVisible, bindings } = useModal();
  const [addLike] = useMutation(ADD_LIKES);

  console.log(id);
  console.log(description);

  const handleLikes = () => {
    addLike({ variables: { id } })
      .then((data) => {
        console.log('Added Likes', data.data?.addLike);
        toast('Added Likes!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
      })
      .catch((error) => {
        console.error('Error adding likes: ', error);
        toast('Error adding likes', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });
      });
  };

  return (
    <div>
      <Button
        css={{
          marginRight: '10px',
          marginBottom: '10px',
          borderRadius: '0px',
          padding: '8px 16px',
          fontSize: '24px',
          backgroundColor: '#fff',
          color: '#222',
          border: '1px solid black',
          boxShadow: '10px 10px black',
          transitionDuration: '0.25s',
          fontWeight: '600',
          '&:hover': {
            transform: 'translate(2px, 2px)',
            boxShadow: '8px 8px black',
          },
          '&:active': {
            transform: 'translate(10px, 10px)',
            boxShadow: '0px 0px black',
          },
        }}
        auto
        flat
        onPress={() => setVisible(true)}
      >
        View Analysis
      </Button>
      <Modal
        fullScreen
        aria-labelledby='modal-title'
        aria-describedby='modal-description'
        {...bindings}
        noPadding={true}
        autoMargin={false}
      >
        <Modal.Header>
          <Grid.Container gap={2} justify='center'>
            <Grid
              justify='center'
              xs={12}
              md={11}
              css={{ border: '1px solid #222222', fontSize: '32px' }}
            >
              <h1 id='modal-title'>{title}</h1>
            </Grid>
            <Grid
              xs={12}
              md={1}
              css={{ border: '1px solid #222222' }}
              justify='center'
            >
              <Button
                light
                css={{
                  width: '100%',
                  height: '100%',
                  border: 'none',
                  backgroundColor: 'none',
                }}
                onPress={() => setVisible(false)}
              >
                <h1>X</h1>
              </Button>
            </Grid>
          </Grid.Container>
        </Modal.Header>
        <Modal.Body css={{ overflow: 'hidden' }}>
          <Grid.Container gap={2} justify='center' css={{ height: '100%' }}>
            <Grid xs={12} md={6} css={{ border: '1px solid #222222' }}>
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
              md={6}
              css={{
                border: '1px solid #222222',
                height: '100%',
                overflow: 'scroll',
                scrollbarWidth: 'none',
                scrollbarColor: 'transparent transparent',
              }}
            >
              <div>
                <p>{description}</p>
              </div>
            </Grid>
          </Grid.Container>
        </Modal.Body>
        <Modal.Footer>
          <Grid.Container gap={2} justify='center'>
            <Grid
              justify='center'
              xs={12}
              md={6}
              css={{ border: '1px solid #222222' }}
            >
              <h1 style={{ fontSize: '32px', fontWeight: '400' }}>
                Likes: {likes}
              </h1>
            </Grid>
            <Grid
              justify='center'
              xs={12}
              md={6}
              css={{ border: '1px solid #222222', backgroundColor: '#222' }}
            >
              <Button
                light
                css={{
                  width: '100%',
                  height: '100%',
                  border: 'none',
                  backgroundColor: '#222',
                  color: '#f5f5f5',
                  fontSize: '32px',
                }}
                onPress={() => handleLikes()}
              >
                LIKE
              </Button>
            </Grid>
          </Grid.Container>
        </Modal.Footer>
        <ToastContainer
          position='top-right'
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='light'
        />
      </Modal>
    </div>
  );
}
