const data = {
  showDataPerLaps: {
    tyres: true,
    spares: true,
    salaries: false,
    marketing: true,
    other: false,
  },
  expenses: {
    months: ["Aug21", "Sept21", "Oct21", "Nov21", "Dec21", "Jan22"],
    tyres: [27833, 42783, 42710, 27722, 18138, 19816],
    spares: [15177, 20707, 8211, 28560, 30403, 5780],
    salaries: [27833, 35962, 27933, 39576, 45409, 50207],
    marketing: [0, 6000, 0, 0, 0, 0],
    other: [20776, 33326, 22101, 22056, 28628, 18280],
  },
  footfall: {
    Aug21: {
      date: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23",
        "24",
        "25",
        "26",
        "27",
        "28",
        "29",
        "30",
        "31",
      ],
      3: [
        48, 199, 170, 33, 21, 27, 50, 38, 65, 156, 31, 9, 36, 60, 77, 122, 104,
        38, 114, 13, 27, 23, 72, 63, 28, 14, 15, 22, 9, 67, 84,
      ],
      6: [
        0, 0, 0, 0, 0, 3, 8, 0, 34, 0, 1, 18, 0, 0, 0, 29, 2, 6, 18, 0, 6, 3,
        15, 4, 0, 5, 0, 4, 0, 7, 14,
      ],
      complementary: [
        0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 28, 0, 0, 0, 0, 0, 3, 8, 0,
        0, 0, 0, 0, 0, 0, 0,
      ],
    },

    Sept21: {
      date: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23",
        "24",
        "25",
        "26",
        "27",
        "28",
        "29",
        "30",
        "31",
      ],
      3: [
        48, 199, 170, 33, 21, 27, 50, 38, 65, 156, 31, 9, 36, 60, 77, 122, 104,
        38, 114, 13, 27, 23, 72, 63, 28, 14, 15, 22, 9, 67, 84,
      ],
      6: [
        0, 0, 0, 0, 0, 3, 8, 0, 34, 0, 1, 18, 0, 0, 0, 29, 2, 6, 18, 0, 6, 3,
        15, 4, 0, 5, 0, 4, 0, 7, 14,
      ],
      complementary: [
        0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 28, 0, 0, 0, 0, 0, 3, 8, 0,
        0, 0, 0, 0, 0, 0, 0,
      ],
    },
    Oct21: {
      date: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23",
        "24",
        "25",
        "26",
        "27",
        "28",
        "29",
        "30",
        "31",
      ],
      3: [
        48, 199, 170, 33, 21, 27, 50, 38, 65, 156, 31, 9, 36, 60, 77, 122, 104,
        38, 114, 13, 27, 23, 72, 63, 28, 14, 15, 22, 9, 67, 84,
      ],
      6: [
        0, 0, 0, 0, 0, 3, 8, 0, 34, 0, 1, 18, 0, 0, 0, 29, 2, 6, 18, 0, 6, 3,
        15, 4, 0, 5, 0, 4, 0, 7, 14,
      ],
      complementary: [
        0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 28, 0, 0, 0, 0, 0, 3, 8, 0,
        0, 0, 0, 0, 0, 0, 0,
      ],
    },

    Nov21: {
      date: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23",
        "24",
        "25",
        "26",
        "27",
        "28",
        "29",
        "30",
        "31",
      ],
      3: [
        48, 199, 170, 33, 21, 27, 50, 38, 65, 156, 31, 9, 36, 60, 77, 122, 104,
        38, 114, 13, 27, 23, 72, 63, 28, 14, 15, 22, 9, 67, 84,
      ],
      6: [
        0, 0, 0, 0, 0, 3, 8, 0, 34, 0, 1, 18, 0, 0, 0, 29, 2, 6, 18, 0, 6, 3,
        15, 4, 0, 5, 0, 4, 0, 7, 14,
      ],
      complementary: [
        0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 28, 0, 0, 0, 0, 0, 3, 8, 0,
        0, 0, 0, 0, 0, 0, 0,
      ],
    },
    Dec21: {
      date: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23",
        "24",
        "25",
        "26",
        "27",
        "28",
        "29",
        "30",
        "31",
      ],
      3: [
        48, 199, 170, 33, 21, 27, 50, 38, 65, 156, 31, 9, 36, 60, 77, 122, 104,
        38, 114, 13, 27, 23, 72, 63, 28, 14, 15, 22, 9, 67, 84,
      ],
      6: [
        0, 0, 0, 0, 0, 3, 8, 0, 34, 0, 1, 18, 0, 0, 0, 29, 2, 6, 18, 0, 6, 3,
        15, 4, 0, 5, 0, 4, 0, 7, 14,
      ],
      complementary: [
        0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 28, 0, 0, 0, 0, 0, 3, 8, 0,
        0, 0, 0, 0, 0, 0, 0,
      ],
    },

    Jan22: {
      date: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23",
        "24",
        "25",
        "26",
        "27",
        "28",
        "29",
        "30",
        "31",
      ],
      3: [
        48, 199, 170, 33, 21, 27, 50, 38, 65, 156, 31, 9, 36, 60, 77, 122, 104,
        38, 114, 13, 27, 23, 72, 63, 28, 14, 15, 22, 9, 67, 84,
      ],
      6: [
        0, 0, 0, 0, 0, 3, 8, 0, 34, 0, 1, 18, 0, 0, 0, 29, 2, 6, 18, 0, 6, 3,
        15, 4, 0, 5, 0, 4, 0, 7, 14,
      ],
      complementary: [
        0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 28, 0, 0, 0, 0, 0, 3, 8, 0,
        0, 0, 0, 0, 0, 0, 0,
      ],
    },
    Feb22: {
      date: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23",
        "24",
        "25",
        "26",
        "27",
        "28",
        "29",
        "30",
        "31",
      ],
      9: [
        48, 199, 170, 33, 21, 27, 50, 38, 65, 156, 31, 9, 36, 60, 77, 122, 104,
        38, 114, 13, 27, 23, 22, 63, 28, 14, 15, 22, 9, 67, 84,
      ],
      6: [
        0, 0, 0, 0, 0, 3, 8, 0, 34, 0, 1, 18, 0, 0, 0, 29, 2, 6, 18, 0, 6, 3,
        15, 4, 0, 5, 0, 4, 0, 7, 14,
      ],
      complementary: [
        0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 28, 0, 0, 0, 0, 0, 3, 8, 0,
        0, 0, 0, 0, 0, 0, 0,
      ],
    },
  },
};
/*
 Important conditions
1.  months in expenses and footfall should be in the same order to calculate avgcost
2.  if you add any other field in expenses like tyres  etc. then also add it in showDataPerLaps like i have added.
     tyres:true means, it will show  tyres/laps also,if you don't want to see tyres/laps data, then set it false,it is mandatory to set one value between these two.
3.  name of every offer in each month should be a digit, which represents its number of laps except complementary(i have given 3 laps to it)
 */
export default function addAvgCostToStore(data) {
  function calculateLapsAndFootallForEachMonth() {
    let arr = [];
    data.footfall.forEach((monthData) => {
      let footfall = 0;
      let laps = 0;
      for (let offer in monthData[1]) {
        if (offer != "date") {
          let eachfootfall = 0;
          // console.log(monthData[0]);
          // console.log(monthData[1][offer]);
          eachfootfall = monthData[1][offer].reduce((a, b) => a + b, 0);
          laps +=
            eachfootfall * (offer == "complementary" ? 3 : parseInt(offer));
          footfall += eachfootfall;
        }
      }
      arr.push({ footfall: footfall, laps: laps });
    });

    return arr;
  }
  let arr = calculateLapsAndFootallForEachMonth(data);
  function addAvgCost(arr) {
    let avgcost = { months: [...data.expenses.months] };
    // add each field/footfall to avgcost
    for (let field in data.expenses) {
      if (field !== "months") {
        let newfiled = [];
        let i = 0;
        data.expenses[field].forEach((ele) => {
          newfiled.push(Number((ele / arr[i].footfall).toFixed(2)));
          i++;
        });
        avgcost[field] = newfiled;
      }
    }
    // add each field/laps to avgcost
    for (let field in data.expenses) {
      if (field !== "months" && data.showDataPerLaps[field]) {
        let newfiled = [];
        let i = 0;
        data.expenses[field].forEach((ele) => {
          newfiled.push(Number((ele / arr[i].laps).toFixed(2)));
          i++;
        });
        avgcost[field + "_laps"] = newfiled;
      }
    }

    data["avgcost"] = avgcost;
  }
  addAvgCost(arr);
}
