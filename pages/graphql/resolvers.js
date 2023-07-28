import { Pool } from 'pg';

const pool = new Pool({
    connectionString: process.env.DATABASE_URL, // The connection string to your PostgreSQL database
  });

const resolvers = {
    Query: {
      artPieces: async () => {
        const client = await pool.connect();
        try {
          const result = await client.query('SELECT * FROM art_pieces');
          return result.rows;
        } catch (error) {
          console.error('Error fetching art pieces:', error);
          return [];
        } finally {
          client.release();
        }
      },
    },
    Mutation: {
      addArtPiece: async (_, { id, image_url, description }) => {
        const client = await pool.connect();
        try {
          const queries = 'INSERT INTO art_pieces (id, image_url, description) VALUES ($1, $2, $3) RETURNING *';
          const values = [id, image_url, description];
          const result = await client.query(queries, values);
          return result.rows[0]
          // console.log(result)
        } catch (error) {
          console.error('Error adding art piece:', error);
          return null;
        } finally {
          client.release();
        }
      },
    },
  };

  export default resolvers;