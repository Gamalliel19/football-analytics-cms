// pages/timeline.js
import Card from '@/components/Card';
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
          <Card
            image_url={artPiece.image_url}
            description={artPiece.description}
            id={artPiece.id}
          />
        </div>
      ))}
    </div>
  );
};

export default TimelinePage;
