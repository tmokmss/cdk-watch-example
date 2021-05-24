#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "@aws-cdk/core";
import { CdkWatchExampleStack } from "../lib/cdk-watch-example-stack";

const app = new cdk.App();
new CdkWatchExampleStack(app, "CdkWatchExampleStack", {});
