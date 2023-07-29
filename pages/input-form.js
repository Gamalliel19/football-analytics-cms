import { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import { v4 } from 'uuid';
import Navbar from '@/components/Navbar';
import { Grid } from '@nextui-org/react';

const ADD_ART_PIECE = gql`
  mutation AddArtPiece($id: ID!, $image_url: String!, $description: String!) {
    addArtPiece(id: $id, image_url: $image_url, description: $description) {
      id
      image_url
      description
    }
  }
`;

const InputForm = () => {
  const [image_url, setimage_url] = useState('');
  const [description, setDescription] = useState('');
  const id = v4();

  const [addArtPiece, { loading, error }] = useMutation(ADD_ART_PIECE);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // console.log(reader.result)
        setimage_url(reader.result); // Set the base64 string of the image
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addArtPiece({
      variables: {
        id,
        image_url, // Send the base64 string of the image
        description,
      },
    })
      .then((data) => {
        console.log('Art piece added successfully:', data.data.addArtPiece);
        setimage_url('');
        setDescription('');
      })
      .catch((error) => {
        console.error('Error adding art piece:', error);
      });
  };

  return (
    <div>
      <Navbar />
      <h1 style={{ padding: '32px' }}>Add Art Piece</h1>
      <form onSubmit={handleSubmit}>
        <Grid.Container gap={2} justify='center'>
          <Grid
            xs={12}
            md={3}
            css={{ border: '1px solid #222222' }}
            justify='center'
          >
            <input type='file' onChange={handleImageChange} accept='image/*' />
          </Grid>
          <Grid
            xs={12}
            md={7}
            css={{ border: '1px solid #222222' }}
            justify='center'
          >
            <input
              type='text'
              placeholder='Description'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: ' none',
              }}
            />
          </Grid>
          <Grid
            xs={12}
            md={2}
            css={{ border: '1px solid #222222', backgroundColor: '#222' }}
            justify='center'
          >
            <button
              type='submit'
              disabled={!image_url || !description || loading}
              style={{
                border: 'none',
                height: '100%',
                width: '100%',
                backgroundColor: '#222',
                color: '#fff',
                cursor: 'pointer',
              }}
            >
              Add Art Piece
            </button>
          </Grid>
        </Grid.Container>

        {error && <p>Error: {error.message}</p>}
      </form>
    </div>
  );
};

export default InputForm;
