## How to replicate the issue:

1.  Clone this repo
2.  Clone the [add-on](https://github.com/pofallon/api-authorizer-addon/) repo
3.  From the add-on project root, run:
    * `npm install`
    * `npm run build`
    * `npm link .`
4.  From the root of _this_ project, run:
    * `npm install`
    * `npm link api-authorizer-addon`
    * `cdk synth`

You should see an error with the message:

`Authorizer (ApiAuthorizerExampleStack/AddOn/Authorizer) must be attached to a RestApi.`

