const {db} = require('@vercel/postgres');
import  messages from '@/../../lib/placeholder-data';



async function seedMessages(client) {
    try {
      await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  
      // Create the "messages" table if it doesn't exist
      const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS messages (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCAR(99) NOT NULL,
      email VARCHAR(99) NOT NULL,
      content VARCHAR(255),
      date DATE NOT NULL
    );`;
  
      console.log(`Created "messages" table`);

      const date = new Date().toISOString().split('T')[0];
  
      // Insert data into the "messages" table
      const insertedMessages = await Promise.all(
        messages.map(
          (message) => client.sql`
          INSERT INTO messages (name, email, content, date)
          VALUES (${message.name}, ${message.email}, ${message.content}, ${date})
          ON CONFLICT (id) DO NOTHING;
        `,
        ),
      );
  
      console.log(`Seeded ${insertedMessages.length} messages`);
  
      return {
        createTable,
        messages: insertedMessages,
      };
    } catch (error) {
      console.error('Error seeding messages:', error);
      throw error;
    }
  }
  

  async function main() {
    const client = await db.connect();
  
    await seedMessages(client);
    await client.end();
  }
  
  main().catch((err) => {
    console.error(
      'An error occurred while attempting to seed the database:',
      err,
    );
  });
  