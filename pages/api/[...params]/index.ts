// https://www.npmjs.com/package/faker/v/5.5.3

import { NextApiRequest, NextApiResponse } from 'next'
import { get } from 'lodash-es';
import { faker } from '@faker-js/faker';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const args: string[] = Array.isArray(req.query.args) ? req.query.args : [req.query.args];
  const locale: string = Array.isArray(req.query.locale) ? req.query.locale[0]: req.query.locale;
  const seed: string = Array.isArray(req.query.seed) ? req.query.seed[0] : req.query.seed;
  const path = (req.query.params as string[]).join('.');

  if (locale) {
    faker.setLocale(locale);
  }

  if (seed) {
    faker.seed(parseInt(seed, 10))
  }

  const fn = get(faker, path);

  try {
    if (!path || !fn) {
      throw new Error('Cannot find fake data')
    }

    res.status(200).json(fn(...args))
  } catch (error: any) {
    res.status(500).json({ statusCode: 500, message: error.message })
  }
}

export default handler

// http://localhost:3001/api/fake?args=Hi,%20my%20name%20is%20{{name.firstName}}%20{{name.lastName}}!
// "Hi, my name is Joy Champlin!"
// http://localhost:3001/api/fake?args=You%20can%20call%20me%20at%20%7B%7Bphone.number(%2B!%23%20!%23%23%20%23%23%23%23%20%23%23%23%23%23!)%7D%7D.
// "You can call me at +87 756 5408 477492."
// http://localhost:3001/api/fake?args=I%20flipped%20the%20coin%20an%20got:%20{{helpers.arrayElement([%22heads%22,%20%22tails%22])}}
// "I flipped the coin an got: tails"
// http://localhost:3001/api/lorem/paragraphs?args=3&args=%0A%0A
// "Aliquid magni tempore blanditiis alias voluptatibus sit magni. Veritatis vero et maiores explicabo doloribus qui perferendis. Provident repellendus aspernatur beatae molestias aut necessitatibus aut. Et magnam non. In totam corrupti. Nobis sapiente veniam neque cum qui dolores sed temporibus.\n\nSuscipit maxime eum blanditiis. Voluptate hic et et voluptatem laboriosam magni porro eum odio. Voluptatum rerum illo quia qui aspernatur voluptatibus. Cupiditate vero sunt accusantium cumque sed ratione eum blanditiis eos.\n\nAlias voluptatum qui nemo ex inventore quos. Dolor et deserunt quisquam quibusdam et fugit reprehenderit mollitia aut. Quo quis quos aperiam voluptas consequatur fugit ea aut. Ad soluta amet facere numquam odio. Quo rerum quia et non distinctio quasi ut cumque."
// http://localhost:3001/api/mersenne/rand\?args\=100\&args\=0
// 82