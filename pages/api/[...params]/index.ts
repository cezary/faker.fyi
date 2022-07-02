// https://www.npmjs.com/package/faker/v/5.5.3

import { NextApiRequest, NextApiResponse } from 'next'
import { get } from 'lodash-es';
import { faker } from '@faker-js/faker';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const args: string[] = Array.isArray(req.query.args) ? req.query.args : [req.query.args];
  let count: number = req.query.count && parseInt(req.query.count as string, 10);
  const locale: string = Array.isArray(req.query.locale) ? req.query.locale[0]: req.query.locale;
  const redirect: boolean = 'redirect' in req.query && !['0', 'false'].includes(req.query.redirect as string);
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
    if (!path || !fn || !(fn instanceof Function)) {
      throw new Error('cannot find fake data')
    }

    let data;
    if (count) {
      data = [];
      while (count > 0) {
        data.push(fn(...args));
        count--;
      }
    } else {
      data = fn(...args);
    }

    if (redirect && typeof data == 'string' && data.startsWith('https://')) {
      res.writeHead(302, {
        'Location': data
      });
    }

    res.status(200).json(data);
  } catch (error: any) {
    res.status(500).json({ statusCode: 500, message: error.message })
  }
}

export default handler
