//Type Aliases

type StringOrNum = string | number;
type objWithName = { name: string; uid: StringOrNum };

const greet = (uid: StringOrNum, item: string) => {
  console.log(`${item} has a uid of ${uid}`);
};

const greet2 = (user: objWithName) => {
  console.log(`${user.name} with id  ${user.uid}`);
};
