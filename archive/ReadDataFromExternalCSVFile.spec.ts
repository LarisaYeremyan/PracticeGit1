import {test} from '@playwright/test';

import fs from "fs";
import {parse} from 'csv-parse/sync';

interface CsvRecord {
  Id: string;
  FirstName: string;
  LastName: string;
}

const records = parse(fs.readFileSync("testdata/testdata.csv"), {
  columns: true,
  skip_empty_lines: true,
  delimiter: ","
}) as CsvRecord[];

records.forEach((record) => {
  test(`Get Data from CSV ${record.Id}`, async({page}) => {
    await page.goto("https://demoqa.com/automation-practice-form");
    await page.getByPlaceholder("First Name").fill(record.FirstName);
    await page.getByPlaceholder("Last Name").fill(record.LastName);
  });
})
