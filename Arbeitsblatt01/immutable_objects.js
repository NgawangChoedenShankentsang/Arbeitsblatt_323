const immutableValue = 5;
console.log(immutableValue);

const userInfo = {
    firstName: "James",
    lastName: "Bond",
    age: 32
};
console.log(userInfo);

const userInfo2 = {
    ...userInfo,
    gender: "male"
};
console.log(userInfo2);

const userInfo3 = {
    ...userInfo2,
    age: userInfo2.age + 1
};
console.log(userInfo3);

const { age, ...userInfo4 } = userInfo3;
console.log(userInfo4);
