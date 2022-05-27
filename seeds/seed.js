const faker = require('faker');

//10 utilisateurs ayant le rôle “AUTHOR”
const users = [...Array(10)].map((user) => (
    //const users = [...Array(10)].map((user) => ()
    {
        email: faker.internet.email(),
        userName: faker.name.userName(), 
        password: faker.internet.password(12),
        role: faker.random.arrayElement([ 'author']),
        createdAt: faker.date.between('2000-01-01', '2022-01-01'),
        updatedAt: faker.date.between('2022-01-02', '2022-06-26')
    }
))

//1 utilisateur ayant le rôle “ADMIN”
const users = [...Array(1)].map((user) => (
    {
        email: faker.internet.email(),
        userName: faker.name.userName(), 
        password: faker.internet.password(12),
        role: faker.random.arrayElement([ 'admin']),
        createdAt: faker.date.between('2000-01-01', '2022-01-01'),
        updatedAt: faker.date.between('2022-01-02', '2022-06-26')
    }
))
//10 catégories=tag
const categories = [...Array(10)].map((categories) => (
    {
        createdAt: faker.date.between('2000-01-01', '2022-01-01'),
        updatedAt: faker.date.between('2022-01-02', '2022-06-26'),
        ArticleId: faker.random.arrayElement([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
        categoriesId: faker.random.arrayElement([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    }
))
//100 articles appartenant à (de 1 à 4 catégories aléatoires) et écrit par l’un des 10 utilisateurs (AUTHOR)
const articleTag = [...Array(10)].map((articleTags) => (
    {
        createdAt: faker.date.between('2000-01-01', '2022-01-01'),
        updatedAt: faker.date.between('2022-01-02', '2022-06-26'),
        ArticleId: faker.random.arrayElement([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
        TagId: faker.random.arrayElement([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    }
)
//Pour chaque article, créer de 0 à 20 commentaires)
const commentaires = [...Array(20)].map((commentaires) => (
    {
        content: faker.lorem.sentences(),
        createdAt: faker.date.between('2000-01-01', '2022-01-01'),
        updatedAt: faker.date.between('2022-01-02', '2022-06-26 '),
        ArticleId: faker.random.arrayElement([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),

    }
))



