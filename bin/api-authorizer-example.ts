#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { ApiAuthorizerExampleStack } from '../lib/api-authorizer-example-stack';

const app = new cdk.App();
new ApiAuthorizerExampleStack(app, 'ApiAuthorizerExampleStack');
