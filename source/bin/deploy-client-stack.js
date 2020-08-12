
/**********************************************************************************************************************
 *  Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.                                           *
 *                                                                                                                    *
 *  Licensed under the Apache License, Version 2.0 (the License). You may not use this file except in compliance    *
 *  with the License. A copy of the License is located at                                                             *
 *                                                                                                                    *
 *      http://www.apache.org/licenses/LICENSE-2.0                                                                    *
 *                                                                                                                    *
 *  or in the 'license' file accompanying this file. This file is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES *
 *  OR CONDITIONS OF ANY KIND, express or implied. See the License for the specific language governing permissions    *
 *  and limitations under the License.                                                                                *
 *********************************************************************************************************************/

const cdk = require("@aws-cdk/core");
const CdkTextractClientStack = require("../lib/cdk-textract-client-stack");
const PermissionsBoundary = require('../lib/cdk-permission-boundary');

const app = new cdk.App();
const stackName = `${process.env.STACKNAME}ClientStack`;

// eslint-disable-next-line no-new
const stack = new CdkTextractClientStack.CdkTextractClientStack(app, stackName);
stack.node.applyAspect(new PermissionsBoundary.PermissionsBoundary(`arn:aws:iam::${cdk.Aws.ACCOUNT_ID}:policy/DataScience-PermissionBoundary`))
