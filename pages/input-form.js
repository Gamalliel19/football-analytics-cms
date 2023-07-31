import { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import { v4 } from 'uuid';
import Navbar from '@/components/Navbar';
import { Grid } from '@nextui-org/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { useRouter } from 'next/router';

const ADD_CONTENT = gql`
  mutation AddContent(
    $id: ID!
    $title: String!
    $image_url: String!
    $description: String!
  ) {
    addContent(
      id: $id
      title: $title
      image_url: $image_url
      description: $description
    ) {
      id
      title
      image_url
      description
    }
  }
`;

const InputForm = () => {
  const id = v4();
  const [title, setTitle] = useState('');
  const [image_url, setimage_url] = useState('');
  const [description, setDescription] = useState('');

  const [addContent, { loading, error }] = useMutation(ADD_CONTENT);

  // const router = useRouter();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setimage_url(reader.result); // Set the base64 string of the image
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addContent({
      variables: {
        id,
        title,
        image_url, // Send the base64 string of the image
        description,
      },
    })
      .then((data) => {
        console.log(
          'Analysis content added successfully: ',
          data.data.addContent
        );
        toast('Content added successfully !', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
        setTitle('');
        setimage_url('');
        setDescription('');
      })
      .catch((error) => {
        console.error('Error adding analysis content: ', error);
      });
  };

  return (
    <div>
      <Navbar />
      <h1 style={{ padding: '32px' }}>Add Analysis Content</h1>
      <form onSubmit={handleSubmit}>
        <Grid.Container gap={2} justify='center'>
          <Grid
            xs={12}
            md={6}
            css={{ border: '1px solid #222222' }}
            justify='center'
          >
            <input
              type='text'
              placeholder='Title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: ' none',
                fontSize: '18px',
              }}
            />
          </Grid>
          <Grid
            xs={12}
            md={6}
            css={{ border: '1px solid #222222' }}
            justify='center'
          >
            <input type='file' onChange={handleImageChange} accept='image/*' />
          </Grid>
          <Grid
            xs={12}
            md={12}
            css={{ border: '1px solid #222222', borderTop: 'none' }}
          >
            <textarea
              rows={25}
              placeholder='Description'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: ' none',
                fontSize: '18px',
              }}
            />
          </Grid>
          <Grid xs={12} md={6} justify='center'></Grid>
          <Grid
            xs={12}
            md={6}
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
              Add Analysis Content
            </button>
          </Grid>
        </Grid.Container>

        <ToastContainer
          position='top-right'
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='light'
        />
        {error && <p>Error: {error.message}</p>}
      </form>
    </div>
  );
};

export default InputForm;
