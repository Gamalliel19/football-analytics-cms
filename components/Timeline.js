// pages/timeline.js
import Card from '@/components/Card';
import { useQuery, gql } from '@apollo/client';

const GET_CONTENT = gql`
  query GetContent {
    contents {
      id
      title
      image_url
      description
      likes
    }
  }
`;
export default function Timeline() {
  const { loading, error, data } = useQuery(GET_CONTENT);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { contents } = data;

  return (
    <div>
      {/* <h1 style={{ padding: '32px' }}>On Top Analysis</h1> */}
      {contents.map((content) => (
        <div key={content.id}>
          <Card
            title={content.title}
            image_url={content.image_url}
            description={content.description}
            likes={content.likes}
            id={content.id}
          />
        </div>
      ))}
    </div>
  );
}
