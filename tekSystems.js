/* code for reverse a string */
function stringReverse(data){
  let str = data;
  let tempStr = '';
  if(data){
    for (let i = str.length - 1; i >= 0; i--) {
		tempStr += str[i];
    }
  }
  console.log("reverse string",tempStr);
  return tempStr;
}

/* code for clone array */
function cloneArray(data){
  let arr;
  if(data){
    arr = data.slice(0,data.length);
  }
  console.log("cloned array",arr);
  return arr;
}

/* code for groupBy */
/* below exaple is grouped by length of the string */
function getGroupBy(data){
  let groupedData;
  if(data){
    groupedData = _.groupBy(data, 'length');
  }
  console.log("data grouped by length",groupedData);
  return groupedData;
}

/* code for chunk */
/* below exaple is chunk the data by 3 */
function chunkData(data){
  let chunkedData;
  if(data){
    chunkedData = _.chunk(data, '3');
  }
  console.log("data chunked by 3",chunkedData);
  return chunkedData;
}

/* code for date diffarance */
/* input for the dates is separated with '/' */
function dateDiffarance(fromdate,toDate){
  let timeDiffDays;
  if(fromdate && toDate){

    let str1= toDate.split('/');
    let str2= fromdate.split('/');

    let dateTime1 = new Date(str1[2], str1[0]-1, str1[1]);    //yyyy   , mm       , dd
    let dateTime2 = new Date(str2[2], str2[0]-1, str2[1]);    //yyyy   , mm       , dd

    let timeDiffMS = dateTime1 - dateTime2; //gives the total in milli seconds
    timeDiffDays = timeDiffMS / (1000*60*60*24);//getting diffarance in days

	}
  console.log(timeDiffDays + ' days');
  return timeDiffDays;
}

/* code for age calculation */
/* dob - 09/29/1989 */
function ageCalculator(dob){
  let age;
  if(dob){
    let todayDate = new Date();
    let birthDate = new Date(dob); //dob - 09/29/1989
    const MS = 1000 * 60 * 60 * 24 * 365.2425; // total milliseconds in one year
    age = Math.floor((todayDate.getTime() - birthDate.getTime()) / MS);
    
  }
  console.log("Age in years",age);
  return age;
}

/* code for promise with timeout */
/* time in milliseconds */
function promiseDelay(time) {
   return new Promise(function(resolve) {
       setTimeout(resolve, time);
       console.log("Delayed by ", time);
   });
}