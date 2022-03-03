function makeArray(dates) {
  let res = dates.split("\n").map((ele) => ele);
  if (isNaN(res[0][0])) return res;
  else return res.map((ele) => parseInt(ele));
}

// console.log(makeArray(data));

function month(date, days, offer1, offer2, offer3, offer4, offer5) {
  let obj = {};
  obj.offer1 = makeArray(offer1);
  obj.offer2 = makeArray(offer2);
  obj.offer3 = makeArray(offer3);
  obj.offer4 = makeArray(offer4);
  obj.offer5 = makeArray(offer5);
  obj.days = makeArray(days);
  obj.date = makeArray(date);
  console.log(obj);
}
let date = `1
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
28`;
let days = `Tues
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
Sun
Mon`;
let offer1 = `52
12
34
25
41
166
30
16
13
32
52
84
150
49
22
29
33
39
93
110
46
17
6
4
37
87
150
19`;
let offer2 = `0
1
0
3
5
1
0
0
0
2
0
2
5
6
0
3
5
0
8
2
0
0
0
0
0
15
5
0`;
let offer3 = `0
0
0
0
0
5
0
10
12
0
0
18
5
0
0
0
0
0
0
4
4
0
0
0
0
0
0
0`;
let offer4 = `6
11
6
10
21
53
21
18
8
9
22
54
68
39
10
22
9
5
33
60
9
4
8
6
6
38
51
1`;
let offer5 = `0
0
0
0
2
21
0
0
0
0
0
0
6
0
16
0
0
0
2
6
0
0
0
0
6
4
2
0`;

month(date, days, offer1, offer2, offer3, offer4, offer5);

// used to make array of integers
// function makeArray(dates) {
//   let res = dates.split("\n").map((ele) => ele);
//   if (isNaN(res[0][0])) return res;
//   else return res.map((ele) => parseInt(ele));
// }
// let data = `10011
// 27529
// 23929
// 66225
// 9866
// 7110`;
// console.log(makeArray(data));

/*
 Important conditions
1.  months in expenses and footfall should be in the same order to calculate avgcost
2.  if you add any other field in expenses like tyres  etc. then also add it in showDataPerLaps like i have added.
     tyres:true means, it will show  tyres/laps also,if you don't want to see tyres/laps data, then set it false,it is mandatory to set one value between these two.
3.  name of every offer in each month should be a digit, which represents its number of laps except complementary(i have given 3 laps to it)
 */
