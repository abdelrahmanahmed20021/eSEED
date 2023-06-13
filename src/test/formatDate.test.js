import { getLast30Days, formatDate } from "./utils/Date";

describe("getLast30Days function", () => {
  test("returns the last 30 days as start and end dates", () => {
    const { startDate, endDate } = getLast30Days();

    // Verify that the returned dates are in the expected format (YYYY-MM-DD)
    expect(startDate).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    expect(endDate).toMatch(/^\d{4}-\d{2}-\d{2}$/);

    // Convert the dates to Date objects for comparison
    const startDateObj = new Date(startDate);
    const endDateObj = new Date(endDate);

    // Verify that the start date is 30 days before the end date
    const diffInTime = endDateObj.getTime() - startDateObj.getTime();
    const diffInDays = Math.ceil(diffInTime / (1000 * 3600 * 24));
    expect(diffInDays).toBe(29); // 29 days, as the end date is inclusive
  });
});

describe("formatDate function", () => {
  test("formats an array of dates into short month and day format", () => {
    const dateArray = ["2023-06-01", "2023-06-02", "2023-06-03"];

    const formattedArray = formatDate(dateArray);

    // Verify that the formatted array contains the expected values
    expect(formattedArray).toEqual(["Jun 1", "Jun 2", "Jun 3"]);
  });
});
