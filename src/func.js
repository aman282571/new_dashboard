// used to make array of integers
// function makeArrayOfIntegers(dates) {
//   return dates.split("\n").map((ele) => parseInt(ele));
// }
// let data = ``;
// console.log(makeArrayOfIntegers(data));

// used to make  x-axis of footfall

function xAxis(dates, days) {
  let arrDate = dates.split("\n");
  let arrDay = days.split("\n").map((weekday) => weekday.slice(0, 3));
  let xAxis = [];
  for (let i = 0; i < arrDate.length; i++) xAxis.push(arrDate[i] + arrDay[i]);
  return xAxis;
}
let dates = `1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31`;
let days = `Fri
Sat
Sun
Mon
Tues
Wed
Thurs
Fri
Sat
Sun
Mon
Tues
Wed
Thurs
Fri
Sat
Sun
Mon
Tues
Wed
Thurs
Fri
Sat
Sun
Mon
Tues
Wed
Thurs
Fri
Sat
Sun`;
console.log(xAxis(dates, days));

/*
 Important conditions
1.  months in expenses and footfall should be in the same order to calculate avgcost
2.  if you add any other field in expenses like tyres  etc. then also add it in showDataPerLaps like i have added.
     tyres:true means, it will show  tyres/laps also,if you don't want to see tyres/laps data, then set it false,it is mandatory to set one value between these two.
3.  name of every offer in each month should be a digit, which represents its number of laps except complementary(i have given 3 laps to it)
 */
