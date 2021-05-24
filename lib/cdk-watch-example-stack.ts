import * as cdk from "@aws-cdk/core";
import { WatchableNodejsFunction } from "cdk-watch";

export class CdkWatchExampleStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const handler = new WatchableNodejsFunction(this, "Handler", {
      entry: "backend/handler.js",
      handler: "handler",
    });
  }
}
