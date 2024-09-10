var fs = require('fs');
const path = require('path');

const dirPath = path.resolve(__dirname, './data');

let jsonFiles = fs.readdirSync(dirPath).filter(f => f.endsWith("json"));
let latestJsonFileName = jsonFiles.sort().reverse()[0];
let latestJsonFilePath = path.resolve(__dirname, './data', latestJsonFileName);
let otherJsonFilesOrdered = jsonFiles.filter(f => f !== latestJsonFileName);

const latestJson = JSON.parse(fs.readFileSync(latestJsonFilePath, { encoding: 'utf8', flag: 'r' }));
let latestInstances = GetInstancesFromJson(latestJson);

let instancesByAge = [];
for (let instance of latestInstances) {
  instancesByAge[instance] = 0;
}

for (let jsonFile of otherJsonFilesOrdered) {
  const jsonPath = path.resolve(__dirname, './data', jsonFile);
  const json = JSON.parse(fs.readFileSync(jsonPath, { encoding: 'utf8', flag: 'r' }));
  let instances = GetInstancesFromJson(json);
  for (let instance of instances) {
    if (instance in instancesByAge)
      instancesByAge[instance] += 0.25;
  }
}

var instancesByAgeSorted = Object.keys(instancesByAge).map(function (key) {
  return [key, instancesByAge[key]];
}).sort(function (first, second) {
  return second[1] - first[1];
});

console.log(instancesByAgeSorted);

console.log("");
console.log("");

console.log(instancesByAgeSorted.map(function (val) {
  return "1) " + val[0] + ", " + val[1] + " years";
}).join("\n"));

function GetInstancesFromJson(json) {
  let instances = json.instances;
  let keys = Object.keys(instances);
  let sortedKeys = // deactivated for now: keys.filter(k => IsHighQualityInstance(instances[k]))
    keys.filter(k => instances[k].timing?.search?.all != null)
      .filter(k => instances[k].timing?.search?.all != null)
      .sort((k1, k2) => instances[k1].timing.search.all.mean - instances[k2].timing.search.all.mean);

  let keysWithoutArchiveOrgPrefix = sortedKeys.map(k => k.replace(/https?:\/\/web\.archive\.org.+?(https?:\/\/.*)/, "$1"));
  return keysWithoutArchiveOrgPrefix;
}

function IsHighQualityInstance(instance) {
  return instance.http?.grade?.startsWith("A") &&
    instance.tls.grade.startsWith("A") &&
    instance.html?.grade === "V" &&
    (instance.timing.search.all?.mean < 2 ?? true) &&
    (instance.timing.search.all?.median < 2 ?? true);
}