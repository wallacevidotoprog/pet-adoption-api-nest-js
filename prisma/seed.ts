import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.address.create({
    data: {
      id: '633e6bc9-d9ad-4913-9a5e-beec09729c22',
      cep: 15035480,
      place: 'Rua das Zona Norte',
      number: 698,
      neighborhood: 'Vila Italia',
      city: 'São Jose do Rio Preto',
      uf: 'SP',
      country: 'Brasil',
    },
  });
  await prisma.user.create({
    data: {
      id: '095abb78-66e2-44d1-9101-8c136b492f34',
      password: '$2b$10$6WKH8trzKWPCFksVmyXN2eOPUmml3o9SJkA19Nk0TdhJLRGJzJ5FW',
      phone: 17999999999,
      email: 'wallace@email.com',
      name: 'wallace vidoto',
      cpf: '12312312312',
      address_id: '633e6bc9-d9ad-4913-9a5e-beec09729c22',
    },
  });
  await prisma.pet_profile.createMany({
    data: [
      {
        id: '095abb78-66e2-44d1-9101-8c136b492f35',
        name: 'God DO MAl',
        type: 'cachorro',
        breed: 'Alemão',
        size: 'pequeno',
        gender: 'feme',
        age: 2,
        description: 'brabo hemmm',
        vaccines: 'varias',
        neutered: true,
        healthy: true,
        specialNeeds: false,
        category: 'doação',
        price: null,
        availableForAdoption: true,
        user_id: '095abb78-66e2-44d1-9101-8c136b492f34',
      },
      {
        id: '095abb78-66e2-44d1-9101-8c136b492f3f',
        name: 'Çoca',
        type: 'cachorro',
        breed: 'Alemão',
        size: 'pequeno',
        gender: 'macho',
        age: 2,
        description: 'brabo hemmm',
        vaccines: 'varias',
        neutered: true,
        healthy: true,
        specialNeeds: false,
        category: 'doação',
        price: null,
        availableForAdoption: true,
        user_id: '095abb78-66e2-44d1-9101-8c136b492f34',
        createdAt: new Date('2025-04-10T19:26:51.000Z'),
        updatedAt: new Date('2025-04-10T19:26:51.000Z'),
      },
      {
        id: '095abb78-66e2-44d1-9101-8c136b492f4',
        name: 'Galali',
        type: 'cachorro',
        breed: 'Alemão',
        size: 'pequeno',
        gender: 'macho',
        age: 2,
        description: 'brabo hemmm',
        vaccines: 'varias',
        neutered: true,
        healthy: true,
        specialNeeds: false,
        category: 'doação',
        price: null,
        availableForAdoption: true,
        user_id: '095abb78-66e2-44d1-9101-8c136b492f34',
        createdAt: new Date('2025-04-10T19:26:51.000Z'),
        updatedAt: new Date('2025-04-10T19:26:51.000Z'),
      },
    ],
  });
  await prisma.pet_image.createMany({
    data: [
      {
        id: '37a22f7f-1b3d-488e-906e-7d339713b3d8',
        url: 'https://s3.amazonaws.com/petz-cdm-stg/b5986f2c-a44...',
        pet_profile_id: '095abb78-66e2-44d1-9101-8c136b492f4',
      },
      {
        id: '3f8d3c7f-f8bf-4cb5-986b-e9a1cc278c45',
        url: 'https://s3.amazonaws.com/petz-cdm-stg/2de6e4c6-49e...',
        pet_profile_id: '095abb78-66e2-44d1-9101-8c136b492f3f',
      },
      {
        id: '77860e45-6de2-4c85-b567-d0708949bb81',
        url: 'https://s3.amazonaws.com/petz-cdm-stg/a56ae97f-254...',
        pet_profile_id: '095abb78-66e2-44d1-9101-8c136b492f35',
      },
    ],
  });
}

main()
  .then(() => {
    console.log('Seed inserido com sucesso!');
  })
  .catch((e) => {
    console.error('Erro no seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
