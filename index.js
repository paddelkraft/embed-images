imageDataURI = require('image-data-uri');


function inlinePictures(markdown){
  const regex = /!\[.*?\]\((.*?)\)/gi;
  const images = markdown.match(regex)||[];
  let promises = [];
  images.forEach((match)=>{
    let parts = [];
  parts.push(match.match(/^!\[.*?\]/gi));
  parts.push(match.match(/\]\((.*?)\)$/gi));
  let href = parts[1][0].substring(2, parts[1][0].length - 1);
  promises.push(imageDataURI.encodeFromFile(href).then(datauri=>{
    markdown = markdown.replace(match,parts[0]+"("+datauri+")");
},err=>{
    //console.log("Not inlined: "+ match);
  }))});

  return new Promise((resolve,reject)=>{
        Promise.all(promises).then(()=>{
        resolve(markdown);
})
});
}

module.exports = inlinePictures;
