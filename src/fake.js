import { faker } from '@faker-js/faker'
import { MongoClient } from 'mongodb';

async function createFakeEmployees() {
  console.log('Starting script...'); // Log when the script starts

  const client = new MongoClient('mongodb://localhost:27017', { useUnifiedTopology: true });
  await client.connect();

  const db = client.db('test');
  const employees = db.collection('employees');

  const fakeEmployees = Array.from({ length: 500 }, () => ({
    employeeId: faker.datatype.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    vacationDays: faker.datatype.number({ min: 0, max: 30 }),
    paidToDate: faker.datatype.number({ min: 0, max: 10000 }),
    paidLastYear: faker.datatype.number({ min: 0, max: 10000 }),
    payRate: faker.datatype.number({ min: 15, max: 50 }),
    payRateId: faker.datatype.number({ min: 1, max: 100 }),
    createdAt: new Date(),
    updatedAt: new Date(),
  }));

  console.log('Fake employees created, inserting into database...'); // Log when the fake employees have been created

  await employees.insertMany(fakeEmployees);

  console.log('Fake employees inserted, closing connection...'); // Log when the fake employees have been inserted

  await client.close();

  console.log('Script finished.'); // Log when the script has finished
}

createFakeEmployees().catch(console.error);