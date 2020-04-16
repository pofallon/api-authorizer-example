import * as cdk from '@aws-cdk/core';
import * as apigateway from '@aws-cdk/aws-apigateway'
import { AddOn } from 'api-authorizer-addon'

export class ApiAuthorizerExampleStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const api = new apigateway.RestApi(this, 'testApi', { })
    const addOn = new AddOn(this, 'AddOn', { api, integration: new apigateway.MockIntegration() })

  }
}
