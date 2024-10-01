// Declare and initialize an array
let staticArray = [10, 20, 30, 40, 50];

// Access and print elements of the array
console.log("Static Array Elements:");
for (let i = 0; i < staticArray.length; i++) {
    console.log(`Element ${i}: ${staticArray[i]}`);
}

// Update an element
staticArray[1] = 25; // Changing 20 to 25

// Print updated array
console.log("\nUpdated Static Array Elements:");
for (let i = 0; i < staticArray.length; i++) {
    console.log(`Element ${i}: ${staticArray[i]}`);
}

// Adding an element to the array
staticArray.push(60); // Adds 60 to the end of the array

// Print array after adding an element
console.log("\nArray After Adding an Element:");
console.log(staticArray);

// Removing the last element from the array
let removedElement = staticArray.pop(); // Removes the last element (60)
console.log(`\nRemoved Element: ${removedElement}`);

// Print array after removing an element
console.log("Array After Removing an Element:");
console.log(staticArray);
