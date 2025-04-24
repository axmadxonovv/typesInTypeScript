function LogParam(target: any, methodName: string, parameterIndex: number) {
  console.log(`Param at index ${parameterIndex} of method ${methodName}`);
}

class Greeter {
  sayHello(@LogParam name: string) {
    console.log(`Hello, ${name}`);
  }
}
