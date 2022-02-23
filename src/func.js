// used to make array of integers
function makeArray(dates) {
  let res = dates.split("\n").map((ele) => ele);
  if (isNaN(res[0][0])) return res;
  else return res.map((ele) => parseInt(ele));
}
let data = `1
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
console.log(makeArray(data));

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
console.log(makeArray(days));

/*
 Important conditions
1.  months in expenses and footfall should be in the same order to calculate avgcost
2.  if you add any other field in expenses like tyres  etc. then also add it in showDataPerLaps like i have added.
     tyres:true means, it will show  tyres/laps also,if you don't want to see tyres/laps data, then set it false,it is mandatory to set one value between these two.
3.  name of every offer in each month should be a digit, which represents its number of laps except complementary(i have given 3 laps to it)
 */
