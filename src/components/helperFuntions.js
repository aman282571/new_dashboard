// makes datasets for chart according to what fields are to display,exluding the x-axis datakey
export function makeDataSets(month, showTheseFields, xAxis) {
  let allDatasets = [];
  // calculating the length of xAxis
  let len = month[xAxis].length;
  // fields store the fields which are to be displayed in the chart
  let fields = [xAxis];
  for (let field in showTheseFields) {
    if (showTheseFields[field]) fields.push(field);
  }

  for (let i = 0; i < len; i++) {
    let singleDataset = {};
    for (let field in month) {
      // check if that field exist in fields then we will show that otherwise not,
      if (fields.indexOf(field) !== -1) singleDataset[field] = month[field][i];
    }
    allDatasets.push(singleDataset);
  }
  return allDatasets;
}

//  this function work is to retrive the field from month except x-axis and set them to true to send this data to checkboxes
export function retrieveFields(month, xAxis) {
  let obj = {};
  for (let field in month) {
    if (field !== xAxis) obj[field] = true;
  }
  return obj;
}
