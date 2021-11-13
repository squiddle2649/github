
function setup(){

   document.getElementById('cocktail').onclick = function(){bars = []
    y_values = [];
    bars = []
    erase()
    createCanvas(1400,700).position(0,163)
    background(0,0,0);
    fill(0)
    rect(0,0,1440,700)

    for(i = 0;i<96;i++){
        bars.push(new Bar(15*i, rand(10,600)))
        y_values.push(bars[i].yValue)
    }

    for(i in bars){
        bars[i].display(255,255,255)
    }
    console.log(cocktailSort(y_values))
  }
  document.getElementById('insertion').onclick = function(){bars = []
    y_values = [];
    bars = [];
    erase()
    createCanvas(1440,700).position(0,163)
    background(0,0,0);
    fill(0)
    rect(0,0,1440,700)

    for(i = 0;i<96;i++){
        bars.push(new Bar(15*i, rand(10,600)))
        y_values.push(bars[i].yValue)
    }

    for(i in bars){
        bars[i].display(255,255,255)
    }
    console.log(insertionSort(y_values))

  }
  document.getElementById('selection').onclick = function(){bars = []
    y_values = [];
    bars = [];
    erase()
    createCanvas(1440,700).position(0,163)
    background(0,0,0);
    fill(0)
    rect(0,0,1440,700)

    for(i = 0;i<96;i++){
        bars.push(new Bar(15*i, rand(10,600)))
        y_values.push(bars[i].yValue)
    }

    for(i in bars){
        bars[i].display(255,255,255)
    }
    console.log(selectionSort(y_values))
  }
  document.getElementById('bubble').onclick = function(){
    y_values = [];
    bars = [];
    erase()
    createCanvas(1440,650).position(0,163)
    background(0,0,0);
    fill(0,0,0)
    rect(0,0,1440,700)

    for(i = 0;i<96;i++){
        bars.push(new Bar(15*i, rand(10,600)))
        y_values.push(bars[i].yValue)
    }

    for(i in bars){
        bars[i].display(255,255,255)
    }
    console.log(bubbleSort(y_values))
  }
}
class Bar{
    constructor(xValue, yValue) {
        this.xValue = xValue
        this.yValue = yValue
        this.width = 10
        this.height = 700 
        this.radius = 0
    }
    display(r, g, b) {
        fill(r,g,b)
        noStroke()
        rect(this.xValue, this.yValue, this.width, this.height, this.radius)
    } 
} 
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
function pull(x_value, new_y,r = 255, g=255,b=255){

    noStroke()
    fill(0,0,0)
    rect(x_value,0,10,1000)
    new Bar(x_value, new_y).display(r,g,b)
    
}
async function selectionSort(inputArr) { 
    n = inputArr.length;
        
    for(let i = 0; i < n; i++) {

        min = i;
        for(j = i+1; j < n; j++){
            if(inputArr[j] > inputArr[min]) {
                min=j; 
            }
         }
         if (min != i) {
             // Swapping the elements
             tmp = inputArr[i];
             inputArr[i] = inputArr[min];
             pull(i*15, inputArr[i]);
             await sleep(50)
             inputArr[min] = tmp;  
             pull(min*15, inputArr[min])
             await sleep(50)
        }
    }
    return inputArr;
}
async function cocktailSort(arr){
let start = 0, end = arr.length, swapped = true;

	while (swapped) {
		swapped = false;
		for (let i = start; i < end - 1; i++) {
			if (arr[i] < arr[i+1]) {
				let temp = arr[i];
				arr[i] = arr[i+1];
                pull(i*15,arr[i])
                await sleep(1)
				arr[i+1] = temp;
                pull((i+1)*15, arr[i+1])
                await sleep(1)
				swapped = true;
			}
		}

		end--;
		if (!swapped)
			break;
    
		swapped = false;
		for (let i = end - 1; i > start; i--) {
			if (arr[i - 1] < arr[i]) {
				let temp = arr[i];
				arr[i] = arr[i - 1];
                pull(i*15,arr[i])
                await sleep(1)
				arr[i - 1] = temp;
                pull((i-1)*15, arr[i-1])
                await sleep(1)
				swapped = true;
			}
		}

		start++;
	}

	return arr;
}
async function bubbleSort(arr){
    for (let i = 0; i < arr.length; i++) { 
        for (let j = 0; j < arr.length; j++) { 
            if (arr[j] < arr[j + 1]) { 
                let temp = arr[j]; 
                arr[j] = arr[j + 1];  
                await sleep(1)
                pull(j*15, arr[j])
                y_values[j + 1] = temp; 
                await sleep(1) 
                pull((j+1)*15, arr[j+1])       
            }
        }
    }   
}
async function insertionSort(inputArr) {
    let n = inputArr.length;
        for (let i = 1; i < n; i++) {
            // Choosing the first element in our unsorted subarray
            let current = inputArr[i];
            // The last element of our sorted subarray
            let j = i-1; 
            while ((j > -1) && (current > inputArr[j])) {
            inputArr[j+1] = inputArr[j];
            await sleep(1)
            pull((j+1)*15,inputArr[j+1])
            j--;
            }
            inputArr[j+1] = current;
            await sleep(1)
            pull((j+1)*15,inputArr[j+1])

        }
    return inputArr;
}
