function AdminOnly(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (
    this: { user?: { role: string } },
    ...args: any[]
  ) {
    if (!this.user) {
      throw new Error("User ma'lumotlari topilmadi");
    }

    if (this.user.role === "admin") {
      return originalMethod.apply(this, args);
    } else {
      console.log("Kirish rad etildi: Faqat adminlar uchun");
      return null;
    }
  };

  return descriptor;
}

class AdminPanel {
  user: { role: string };

  constructor(role: string) {
    this.user = { role };
  }

  @AdminOnly
  deleteAll() {
    console.log("Barcha ma'lumotlar o'chirildi");
    return true;
  }
}

const admin = new AdminPanel("admin");
admin.deleteAll();

const user = new AdminPanel("user");
user.deleteAll();
