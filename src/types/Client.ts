import fs from "mz/fs";
import _ from "underscore";
import axios from "axios";

export class Client {
  options: ClientOptions;
  constructor(options: ClientOptions) {
    const defaultOptions = {
      streaming: false,
      apiKey: ""
    } as ClientOptions;
    //@TODO: merge options
    this.options = options;
  }
  parseJSONFile = async (fileName: string) => {
    try {
      const data = await fs.readFile(fileName, "utf8");
      const obj = JSON.parse(data);
      return obj;
    } catch (err) {
      // @TODO handle error
      console.log(err);
      return null;
    }
  };
  compareObjects = async (oldObj: object, newObj: object) => {
    const { streaming, apiKey } = this.options;
    if (streaming) {
      // @TODO: handle streaming cmp
    } else {
      const result = _.isEqual(oldObj, newObj);
      const error = !result;
      console.log(`Publishing result with error: ${error}`);
      const res = await axios.post(
        "https://insightful-server.herokuapp.com/results/",
        {
          fields: {
            api_key: "VMVK61C-1VSM6QY-HZV19R6-AXE5657",
            error,
            message: "amount",
            project: "teamdealeronline"
          }
        }
      );
    }
  }
  compareFile() {
    console.log("Comparing File!");
  }
}

export interface ClientOptions {
  streaming: boolean;
  apiKey: string;
}
