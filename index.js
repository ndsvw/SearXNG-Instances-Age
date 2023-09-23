var fs = require('fs');

let jsonFiles = fs.readdirSync('.').filter(f => f.endsWith("json"));
let latestJsonFile = jsonFiles.sort().reverse()[0];
let otherJsonFilesOrdered = jsonFiles.filter(f => f !== latestJsonFile);

const latestJson = JSON.parse(fs.readFileSync(latestJsonFile, { encoding: 'utf8', flag: 'r' }));
let latestInstances = GetInstancesFromJson(latestJson);

let instancesByAge = [];
for (let instance of latestInstances) {
  instancesByAge[instance] = 0;
}

for (let jsonFile of otherJsonFilesOrdered) {
  const json = JSON.parse(fs.readFileSync(jsonFile, { encoding: 'utf8', flag: 'r' }));
  let instances = GetInstancesFromJson(json);
  for (let instance of instances) {
    if (instance in instancesByAge)
      instancesByAge[instance] += 0.5;
  }
}

var instancesByAgeSorted = Object.keys(instancesByAge).map(function (key) {
  return [key, instancesByAge[key]];
}).sort(function (first, second) {
  return second[1] - first[1];
});

console.log(instancesByAgeSorted);

function GetInstancesFromJson(json) {
  let instances = json.instances;
  let keys = Object.keys(instances);
  let filteredKeys = keys.filter(k => instances[k].network_type === "normal")
    .filter(k => instances[k].http?.grade?.startsWith("A"))
    .filter(k => instances[k].tls.grade.startsWith("A"))
    .filter(k => instances[k].html.grade.startsWith("V"))
    .filter(k => instances[k].timing.search.all?.mean < 2)
    .filter(k => instances[k].timing.search.all.median < 2)
    .sort((k1, k2) => instances[k1].timing.search.all.mean - instances[k2].timing.search.all.mean);

  let keysWithoutArchiveOrgPrefix = filteredKeys.map(k => k.replace(/https?:\/\/web\.archive\.org.+?(https?:\/\/.*)/, "$1"));
  return keysWithoutArchiveOrgPrefix;
}