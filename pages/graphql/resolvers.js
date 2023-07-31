import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // The connection string to your PostgreSQL database
});

const resolvers = {
  Query: {
    contents: async () => {
      const client = await pool.connect();
      try {
        const result = await client.query('SELECT * FROM content');
        return result.rows;
      } catch (error) {
        console.error('Error fetching acontent:', error);
        return [];
      } finally {
        client.release();
      }
    },
  },
  Mutation: {
    addContent: async (_, { id, title, image_url, description }) => {
      const client = await pool.connect();
      try {
        const queries =
          'INSERT INTO content (id, title, image_url, description) VALUES ($1, $2, $3, $4) RETURNING *';
        const values = [id, title, image_url, description];
        const result = await client.query(queries, values);
        return result.rows[0];
      } catch (error) {
        console.error('Error adding content:', error);
        return null;
      } finally {
        client.release();
      }
    },
  },
};

export default resolvers;
