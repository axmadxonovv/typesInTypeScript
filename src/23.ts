function ShowClassName(constructor: Function) {
  console.log(`Class created: ${constructor.name}`);
}

@ShowClassName
class Product {
  name = "iPhone";
}
