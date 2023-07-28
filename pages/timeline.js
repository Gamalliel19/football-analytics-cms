// pages/timeline.js
import { useQuery, gql } from '@apollo/client';

const GET_ART_PIECES = gql`
  query GetArtPieces {
    artPieces {
      id
      image_url
      description
    }
  }
`;

const TimelinePage = () => {
  const { loading, error, data } = useQuery(GET_ART_PIECES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { artPieces } = data;

  return (
    <div>
      <h1>Art Showcase Timeline</h1>
      {artPieces.map((artPiece) => (
        <div key={artPiece.id}>
          <img src={artPiece.image_url} alt={`Art Piece ${artPiece.id}`} />
          <p>{artPiece.description}</p>
        </div>
      ))}
    </div>
  );
};

export default TimelinePage;
