function LogProperty(target: any, propertyName: string) {
  let value: any;

  const getter = function () {
    return value;
  };

  const setter = function (newVal: any) {
    console.log(`${propertyName} set to ${newVal}`);
    value = newVal;
  };

  Object.defineProperty(target, propertyName, {
    get: getter,
    set: setter,
    enumerable: true,
    configurable: true,
  });
}

class User {
  @LogProperty
  name: string = "Ali";

  @LogProperty
  age: number = 25;
}
