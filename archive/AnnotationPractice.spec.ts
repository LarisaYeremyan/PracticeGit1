import {test} from '@playwright/test';

test.describe('Practice of Describe', async() => {
  test("Practice Test 1", async({page})=> {
    console.log("Starting Practice Test 1");
    console.log("Ending Practice Test 1");
  });

  test("Practice Test 2", async({page})=> {
    console.log("Starting Practice Test 2");
    console.log("Ending Practice Test 2");
  });

  test("Practice Test 3", async({page})=> {
    console.log("Starting Practice Test 3");
    console.log("Ending Practice Test 3");
  });
});

test.fixme("Practice Test 4", async({page})=> {
  console.log("Starting Practice Test 4");
  console.log("Ending Practice Test 4");
});

test("Practice Test 5", async({page})=> {
  console.log("Starting Practice Test 5");
  console.log("Ending Practice Test 5");
});

test("Practice Test 6", async({page})=> {
  console.log("Starting Practice Test 6");
  console.log("Ending Practice Test 6");
});
