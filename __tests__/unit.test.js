// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

test("phone number is empty", () => {
  expect(functions.isPhoneNumber("")).toBeFalsy();
});

test("phone number is too short", () => {
  expect(functions.isPhoneNumber("123-456")).toBeFalsy();
});

test("basic phone number", () => {
  expect(functions.isPhoneNumber("123-4567")).toBeTruthy();
});

test("phone number with area code", () => {
  expect(functions.isPhoneNumber("123-456-7890")).toBeTruthy();
});

test("email without @", () => {
  expect(functions.isEmail("fakeemail.com")).toBeFalsy();
});

test("email without domain", () => {
  expect(functions.isEmail("fake@")).toBeFalsy();
});

test("normal email", () => {
  expect(functions.isEmail("fake@email.com")).toBeTruthy();
});

test("email with special characters", () => {
  expect(functions.isEmail("f4k3@email.com")).toBeTruthy();
});

test("password is too short", () => {
  expect(functions.isStrongPassword("abc")).toBeFalsy();
});

test("password does not start with letter", () => {
  expect(functions.isStrongPassword("1bc")).toBeFalsy();
});

test("valid password with only letters", () => {
  expect(functions.isStrongPassword("abcd")).toBeTruthy();
});

test("valid password with underscore", () => {
  expect(functions.isStrongPassword("abcd_")).toBeTruthy();
});

test("date without year", () => {
  expect(functions.isDate("01 / 01 / ")).toBeFalsy();
});

test("date with improper spacing", () => {
  expect(functions.isDate("01 / 01 / 2000")).toBeFalsy();
});

test("date with double digit day and month", () => {
  expect(functions.isDate("01/01/2000")).toBeTruthy();
});

test("date with single digit day and month", () => {
  expect(functions.isDate("1/1/2000")).toBeTruthy();
});

test("hex color is too short", () => {
  expect(functions.isHexColor("#f")).toBeFalsy();
});

test("hex color is too long", () => {
  expect(functions.isHexColor("#fffffff")).toBeFalsy();
});

test("three symbol hex color", () => {
  expect(functions.isHexColor("#fff")).toBeTruthy();
});

test("six symbol hex color", () => {
  expect(functions.isHexColor("#ffffff")).toBeTruthy();
});
