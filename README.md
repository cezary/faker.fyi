# faker.fyi

An easy to use api to get fake data, powered by [faker-js](https://www.npmjs.com/package/@faker-js/faker)




## API Reference

#### Get fake items

```http
  GET /api/{module}/{item}
```

Module and item parameters correspond to the api of the faker package. [You can reference their API guide for the full list of objects supported.](https://fakerjs.dev/api/address.html)

| Query Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `args` | `any` | Pass arguments to faker functions |
| `count` | `number` | Return a count-sized array of items |
| `locale` | `string` | Set a locale, defaults to English |
| `redirect` | `boolean` | If result is a url, automatically redirect to the url |
| `seed` | `number` | Sets randomness seed value for repeatable results |




## Demo

#### a name
[https://faker.fyi/api/name/findName](https://faker.fyi/api/name/findName)

    "Nicholas Fisher"

#### a female name with the surname "Smith"
[https://faker.fyi/api/name/findName?args=&args=Smith&args=female](https://faker.fyi/api/name/findName?args=&args=Smith&args=female)

    "Annette Smith"

#### a vehicle
[https://faker.fyi/api/vehicle/vehicle](https://faker.fyi/api/vehicle/vehicle)

    "Honda Silverado"

#### random value between 100 and 0
[https://faker.fyi/api/mersenne/rand?args=100&args=0](https://faker.fyi/api/mersenne/rand?args=100&args=0)

    82

#### phone number in the 312 area-code
[https://faker.fyi/api/phone/phoneNumber?args=312-%23%23%23-%23%23%23%23](https://faker.fyi/api/phone/phoneNumber?args=312-%23%23%23-%23%23%23%23)

    "312-829-8284"

NOTE: pound symbol needs to be percent encoded in url

#### 10 random emojis
[https://faker.fyi/api/internet/emoji?count=10](https://faker.fyi/api/internet/emoji?count=10)

```
["⚰️","🦑","🛼","🖕","🍗","🎮","🦘","👩🏿‍🦱","🏉","🕖"]
```

#### 5 paragraphs of lorem ipsum separated by two newlines
[https://faker.fyi/api/lorem/paragraphs?args=5&args=%0A%0A](https://faker.fyi/api/lorem/paragraphs?args=5&args=%0A%0A)

```
Expedita optio incidunt quibusdam voluptatem delectus nemo voluptas. Voluptates sequi officiis voluptatem quaerat. Voluptas maiores molestias rerum. Doloribus aut distinctio sunt minima officia sed quo.

Illo veniam qui temporibus. Error amet velit dolores et. Ipsam deleniti aliquam non in.

Qui nulla placeat voluptatibus est tempore est quisquam. Ut quisquam quia veniam fuga natus id nobis tempora debitis. Cum sit veniam corporis explicabo hic enim. Doloribus eum aut.

Perspiciatis quo aut maiores et nihil quia quae aut et. Repudiandae voluptatibus corporis cum. Reiciendis et omnis earum commodi nam dicta et iusto. Ut iure consequatur. Perferendis iure et nisi magnam reiciendis occaecati reprehenderit. Distinctio vel qui nesciunt consequatur enim provident molestias.

Aut corporis dolore est voluptate maxime voluptatibus voluptas praesentium. Laudantium aperiam cumque culpa perspiciatis atque deleniti ab modi. Et odit et laudantium vitae neque suscipit non. Atque officia sed a reprehenderit totam dolorum eaque deleniti occaecati.
```

#### generate messages using fake methods
[https://faker.fyi/api/fake?args=Hi,%20my%20name%20is%20{{name.firstName}}%20{{name.lastName}}!](https://faker.fyi/api/fake?args=Hi,%20my%20name%20is%20{{name.firstName}}%20{{name.lastName}}!)

    "Hi, my name is Joy Champlin!"

[https://faker.fyi/api/fake?args=You%20can%20call%20me%20at%20%7B%7Bphone.number(%2B!%23%20!%23%23%20%23%23%23%23%20%23%23%23%23%23!)%7D%7D.](https://faker.fyi/api/fake?args=You%20can%20call%20me%20at%20%7B%7Bphone.number(%2B!%23%20!%23%23%20%23%23%23%23%20%23%23%23%23%23!)%7D%7D.)

    "You can call me at +87 756 5408 477492."

[https://faker.fyi/api/fake?args=I%20flipped%20the%20coin%20and%20got:%20{{helpers.arrayElement([%22heads%22,%20%22tails%22])}}](https://faker.fyi/api/fake?args=I%20flipped%20the%20coin%20and%20got:%20{{helpers.arrayElement([%22heads%22,%20%22tails%22])}})

    "I flipped the coin and got: heads"