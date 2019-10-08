#!/usr/bin/env node
import cdk = require('@aws-cdk/core');
import { CdkworkshopStack } from '../lib/cdkworkshop-stack';

const app = new cdk.App();
new CdkworkshopStack(app, 'CdkworkshopStack');