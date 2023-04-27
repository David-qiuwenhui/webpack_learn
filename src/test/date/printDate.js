import { dateToStr } from "utils/date.js";

export const logDate = function () {
    console.log(`🕰🕰🕰` + dateToStr(new Date()));
};
