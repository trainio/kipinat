

let data = {}; // Global object to hold results from the loadJSON call
let bubbles = []; // Global array to hold all bubble objects

// Put any asynchronous data loading in preload to complete before "setup" is run
function preload() {
  data = loadJSON('http://195.148.108.19/mediawiki/api.php?action=query&prop=revisions&titles=Havainto_lukupiiri&rvslots=*&rvprop=content&formatversion=2');
}

// Convert saved Bubble data into Bubble Objects
function loadData() {
  let bubbleData = data['pages'];
  for (let i = 0; i < bubbleData.length; i++) {
    // Get each object in the array
    let bubble = bubbleData[i];
    console.log(bubble);
    // Get a position object
    // let position = bubble['position'];
    // // Get x,y from position
    // let x = position['x'];
    // let y = position['y'];
    //
    // // Get diameter and label
    // let diameter = bubble['diameter'];
    // let label = bubble['label'];
    //
    // // Put object in array
    // bubbles.push(new Bubble(x, y, diameter, label));
  }
}



function draw(){
  loadData();
}
