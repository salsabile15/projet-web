const faker = require('faker');

const fakerAuthors = () =>({
        email: faker.internet.email(),
        userName: faker.name.userName(), 
        password: faker.internet.password(12),
        role: 'AUTHOR',
        createdAt: faker.date.between('2000-01-01', '2022-01-01'),
        updatedAt: faker.date.between('2022-01-02', '2022-06-26')
})

const fakerCategories = () =>({
    name : faker.name.type(),
        createdAt: faker.date.between('2000-01-01', '2022-01-01'),
        updatedAt: faker.date.between('2022-01-02', '2022-06-26'),
        ArticleId: faker.random.arrayElement([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
        categoriesId: faker.random.arrayElement([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
})
const fakerAdmin = () => ({
    email: faker.internet.email(),
        userName: faker.name.userName(), 
        password: faker.internet.password(12),
        role: 'ADMIN',
        createdAt: faker.date.between('2000-01-01', '2022-01-01'),
        updatedAt: faker.date.between('2022-01-02', '2022-06-26')
})
const fakerArticles = async(name)=> ({
    createdAt: faker.date.between('2000-01-01', '2022-01-01'),
    updatedAt: faker.date.between('2022-01-02', '2022-06-26'),
    ArticleId: faker.random.arrayElement([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    title : faker.lorem.sentence(),
    image : faker.image.photo(),
    published : true
})

const fakerComments = (ArticleId) => ({
    comment : faker.lorem.sentence(),
    postId : ArticleId,
    createdAt: faker.date.between('2000-01-01', '2022-01-01'),
    updatedAt: faker.date.between('2022-01-02', '2022-06-26 '),
    ArticleId: faker.random.arrayElement([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
})



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

async function main(){
    const fakerAuthor = 10
    const fakerAdmin = 1
    const fakerCategories = 10
    const fakerArticles = 100
    const fakerComments = 20

}


