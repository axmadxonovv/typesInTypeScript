interface User {
  name: string;
  email: string;
  age: number;
  address: string;
}

type UserInfo = Pick<User, "name" | "email">;

const contactInfo: UserInfo = {
  name: "avazbek",
  email: "avazbek@gmail.com",
};
