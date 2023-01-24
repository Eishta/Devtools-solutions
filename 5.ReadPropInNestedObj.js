// https://www.devtools.tech/questions/s/implement-a-function-to-read-a-field-inside-a-nested-object-or-frontend-problem-solving-or-javascript-interview-question---qid---snnK8CfCsV5soFmgHzKC
function read(collection, property) {
    const isCollectionInvalid = !collection || typeof collection !== 'object';
   const isPropertyInvalid = !property || !property.trim().length || typeof property !== 'string';
   
   if (isCollectionInvalid || isPropertyInvalid) {
     return undefined;
   }
   
 
   const path = property.split('.');
 
   let i;
   let currentKey;
   let currentItem = collection;
 
   for (i = 0; i < path.length; i++) {
     currentKey = path[i];
     
     if (!Object.prototype.hasOwnProperty.call(currentItem, currentKey)) {
       currentItem = undefined;
       break;
     }
 
     currentItem = currentItem[currentKey];
   }
 
   return currentItem;
 }