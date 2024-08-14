const {db} = require('@vercel/postgres');

 const messages = [
    {
        name:'Janet Ajuyi',
        email: 'jjajuyi@gmail.com',
        content: 'I\'ll you to contact me to discuss price. Thank you.'
    },

    {
        name:'Mosunmola Ademola',
        email: 'mosun@yahoo.com',
        content: 'I have some offer for you. Please, contact me. Thank you.'
    }
]



async function seedMessages(client) {
    try {
      await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  
      // Create the "messages" table if it doesn't exist
      const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS messages (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(99) NOT NULL,
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
  