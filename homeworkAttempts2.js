// ## Exercise: This

// Create a single object named `slideshow` that represents the data and functionality of a picture slideshow. There should be NO VARIABLES OUTSIDE THE OBJECT. The object should have properties for:

// 1. An array called `photoList` that contains the names of the photos as strings
// 2. An integer `currentPhotoIndex` that represents which photo in the `photoList` is currently displayed
// 3. A `nextPhoto()` function that moves `currentPhotoIndex` to the next index `if `there is one, and:
//  4. logs the current photo name.
//  5. Otherwise, log "End of slideshow";
// 4. A `prevPhoto()` function that does the same thing, but backwards.
// 5. A function `getCurrentPhoto()` that returns the current photo from the list.






var slideshow = {
    photoList: ['photo1', 'photo2', 'photo3'],
    currentPhotoIndex: 1,
    nextPhoto: function(){
        if (this.currentPhotoIndex < this.photoList.length){
            // console.log(this.photoList[this.currentPhotoIndex]);
            return thisCurrentPhotoIndex++;
        } else {
            console.log("End of slideshow");
        }
    }
    // prevPhoto: function(){
    //     if (this.currentPhotoIndex )
}







// // TEMPLATE

let slideshow = {
    photoList: [ array ],
    currentPhotoIndex: number,
    nextPhoto: function() {
       if statement
},
    prePhoto: function() {
       if statement
},
    getCurrentPhoto: function() {
       still working on this one
}
}






// var slideShow = {
//     photoList: ['photo1','photo2','photo3','photo4','photo5'],

//     // 1. An array called `photoList` that contains the names of the photos as strings

//     currentPhotoIndex: 0,

//     // 2. An integer `currentPhotoIndex` that represents which photo in the `photoList` is currently displayed


//     nextPhoto: function(){
//         if(this.currentPhotoIndex < this.photoList.length){
//             console.log(this.photoList[this.currentPhotoIndex])
//         }
//     }

// // 3. A `nextPhoto()` function that moves `currentPhotoIndex` to the next index `if `there is one, and:


//     prevPhoto: function(){
//     if (this.currentPhotoIndex > 0){
//         console.log(this.photoList[this.currentPhotoIndex]);
//         return this.currentPhotoIndex--;
//     } else console.log("End of slideshow");

// // 4. A `prevPhoto()` function that does the same thing, but backwards.


//     getCurrentPhoto: function(){
//     console.log(this.photoList[this.currentPhotoIndex]);
//     return this.photoList[this.currentPhotoIndex];
//     // returns the current photo from the list
// },


// // 5. A function `getCurrentPhoto()` that returns the current photo from the list.







// // stan

var slideShow = {
    photoList: ['pic1','pic2','pic3','pic4','pic5','pic6'],
    currentPhotoIndex: 1,
    nextPhoto: function(){
        if (this.currentPhotoIndex < this.photoList.length-1){
            console.log(this.photoList[this.currentPhotoIndex]);
            return this.currentPhotoIndex++;
        } else console.log("End of slideshow");
        // move currentPhotoIndex to the next index "IF" there is one
        // logs the current photo name
        // otherwise log "End of slideshow"
    },
    prevPhoto: function(){
        if (this.currentPhotoIndex > 0){
            console.log(this.photoList[this.currentPhotoIndex]);
            return this.currentPhotoIndex--;
        } else console.log("End of slideshow");
        // same as nextphoto but backwards.
    },
    getCurrentPhoto: function(){
        console.log(this.photoList[this.currentPhotoIndex]);
        return this.photoList[this.currentPhotoIndex];
        // returns the current photo from the list
    },
}
slideShow.nextPhoto();     
slideShow.nextPhoto();     
slideShow.nextPhoto();
slideShow.nextPhoto();
slideShow.prevPhoto();
slideShow.prevPhoto();
slideShow.prevPhoto();
slideShow.getCurrentPhoto();
slideShow.getCurrentPhoto();
slideShow.getCurrentPhoto();

console.log(slideShow);