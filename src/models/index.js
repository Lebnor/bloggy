// @ts-check
import Amplify from 'aws-amplify';
import awsconfig from '../aws-exports';

Amplify.configure(awsconfig);

import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';




const { Blog, Post, Comment } = initSchema(schema);

export {
  Blog,
  Post,
  Comment
};

import { DataStore } from '@aws-amplify/datastore';
import { Blog as BlogModel } from '../models';

DataStore.save(
    new Blog({
		"name": "Lorem ipsum dolor sit amet",
		"posts": []
	})
);