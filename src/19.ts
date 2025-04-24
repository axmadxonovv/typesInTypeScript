interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

function fetchUser(): ApiResponse<{ name: string; age: number }> {
  return {
    success: true,
    data: { name: "Ali", age: 25 },
  };
}
