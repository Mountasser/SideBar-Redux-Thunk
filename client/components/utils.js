export function checkUndef(item) {
  return (typeof item !== 'undefined');
}

export function toggleSection(sectionId, activeSections, singleOpen) {
  let present = null;
  let newActiveSections = activeSections;

  newActiveSections.map((section) => {
    if (section === sectionId) present = true;
    return true;
  });

  if (!singleOpen) {
    if (present) {
      const pos = newActiveSections.indexOf(sectionId);
      newActiveSections.splice(pos, 1);
    } else {
      newActiveSections.push(sectionId);
    }
  } else {
    newActiveSections = [sectionId];
  }

  return newActiveSections;
}

export function setupAccordion(info) {
  console.log(info.kids);
  const singleOpen = (checkUndef(info.singleOpen)) ? info.singleOpen : false;
  const activeSections = [];
  const singleChild = typeof info.kids.length === 'undefined';

  if (!singleChild) {
    info.kids.forEach((child, i) => {
      
      if (singleOpen && activeSections.length === 0 ) {
        activeSections.push(`acc-sec-${i}`);
      }
      if (!singleOpen ) {
        activeSections.push(`acc-sec-${i}`);
      }
    });
  }

  return {
    activeSections,
  };
}


export const  StringToJsonArray= (string) => {
var jsonData = JSON.stringify(string);
var jsObject = JSON.parse(jsonData);
console.log(jsObject[0])
return(jsObject);


}