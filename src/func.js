function makeArray(dates, day) {
  let arrDate = dates.split("\n");
  let arrDay = day.split("\n").map((weekday) => weekday[0]);
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
let day = `Fri
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
console.log(makeArray(dates, day));
