function func() {
  return (
      String(new Date().getFullYear()) + " " +
      String(new Date().getMonth() + 1) + " " +
      String(new Date().getDate())
  );
}
console.log(func());