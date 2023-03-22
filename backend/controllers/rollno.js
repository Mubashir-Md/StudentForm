function details(rollno)
{
    const whichYr = { 22:1 , 21:2 , 20:3 , 19:4 }
    //keys [ 22, 21, 20, 19] values [1, 2, 3, 4]
    const whichCollection = { itLecturers:737, aidsLecturers:747, cseLecturers:733, eceLecturers:735, mechLecturers:736, aimlLecturers:748, eeeLecturers:734, prodLecturers:738, civilLecturers:732 }

    let yrFound = false
    let collectionFound = false

    let obj = { collection:null, yr:0, section:null }
    let clgCode = Number(rollno.slice(0,4))
    let yr = Number(rollno.slice(4,6))
    let branch = Number(rollno.slice(6,9))
    let section = Number(rollno.slice(9,12))
    if(rollno.length!=12) return null
    if(Number(clgCode)!=1604) return null

    for (const key in whichCollection)
        if(whichCollection[key]==branch) collectionFound=true
    if(collectionFound==false) return null
    obj.collection = Object.keys(whichCollection)[Object.values(whichCollection).indexOf(branch)]

    for (let i = 0; i < (Object.keys(whichYr)).length; i++)
        if((Object.keys(whichYr))[i]==yr) yrFound=true
    if(yrFound==false) return null
    obj.yr = whichYr[yr]

    if( 0<section && section<=60 || 300<section && section<=306 ) obj.section = 'a'
    else if( 60<section && section<=120 || 306<section && section<=312 ) obj.section = 'b'
    else return null
    
    return obj
}
console.log(details('160420737309'))

export default details

function getallfromroll(roll) {
    const whichYr = { 22: 1, 21: 2, 20: 3, 19: 4};
    const whichbranch = {
      733: "CSE",
      737: "IT",
      747: "AIDS",
      735: "ECE",
      736: "MECH",
      732: "CIVIL",
      748: "AIML",
      734: "EEE",
      738: "PROD",
    };
    let regex = /^[0-9]{12}$/;
    if (!regex.test(roll)) {
      throw new Error("roll no is not valid");
    }
    let obj = {};
    let clgCode = Number(roll.slice(0, 4));
    let yr = Number(roll.slice(4, 6));
    let branch = Number(roll.slice(6, 9));
    let section = Number(roll.slice(9, 12));
    if (roll.length != 12) return null;
    if (Number(clgCode) != 1604) return null;
  
    if (!whichbranch.hasOwnProperty(branch)) {
      throw new Error("branch is not valid");
    }
    obj["branch"] = whichbranch[branch];
    if (!whichYr.hasOwnProperty(yr)) {
      throw new Error("yr is not valid");
    }
    obj["yr"] = whichYr[yr];
  
    if ((0 < section && section <= 60) || (300 < section && section <= 306))
      obj.section = "A";
    else if (
      (60 < section && section <= 120) ||
      (306 < section && section <= 312)
    )
      obj.section = "B";
    else {
      throw new Error("section not valid");
    }
    return obj;
  }
  
  export {getallfromroll}
