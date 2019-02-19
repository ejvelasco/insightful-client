import path from "path";
import { Client, ClientOptions } from "./types/Client";

class InsightfulClient extends Client {}

const options = {
  streaming: false, 
  apiKey: "VMVK61C-1VSM6QY-HZV19R6-AXE5657"
} as ClientOptions;
const client = new InsightfulClient(options);

async function example() {
  const oldObj = await client.parseJSONFile(path.join(__dirname, "../example/old.json"));
  const newObj = await client.parseJSONFile(path.join(__dirname, "../example/new.json"));
  client.compareObjects(oldObj, newObj);
}

example();
