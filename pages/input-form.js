import { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import {v4} from 'uuid'

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
  const id = v4()

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
      <h2>Add Art Piece</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleImageChange} accept="image/*" />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit" disabled={!image_url || !description || loading}>
          Add Art Piece
        </button>
        {error && <p>Error: {error.message}</p>}
      </form>
    </div>
  );
};

export default InputForm;

// // pages/input-form.js
// import { useState } from 'react';
// import { useMutation, gql } from '@apollo/client';

// const UPLOAD_IMAGE_MUTATION = gql`
//   mutation AddArtPiece($image_url: String!, $description: String!) {
//     addArtPiece(image_url: $image_url, description: $description) {
//       id
//       image_url
//       description
//     }
//   }
// `;

// const InputForm = () => {
//   const [image_url, setimage_url] = useState('');
//   const [description, setDescription] = useState('');
//   const [addArtPiece] = useMutation(UPLOAD_IMAGE_MUTATION);

//   console.log(image_url)
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await addArtPiece({
//         variables: { image_url, description },
//       });
//       console.log('Art piece added:', response.data.addArtPiece);
//       // Optionally, you can redirect to the timeline page after successful upload.
//     } catch (error) {
//       console.error('Error adding art piece:', error.message);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="image">Upload Image:</label>
//         <input
//           type="file"
//           id="image"
//           onChange={(e) => setimage_url(URL.createObjectURL(e.target.files[0]))}
//         />
//       </div>
//       <div>
//         <label htmlFor="description">Description:</label>
//         <textarea
//           id="description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//         />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default InputForm;
