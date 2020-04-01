// - Create a branch off of your existing slideshow
// - For your branch use the naming convention `async_YOUR_NAME_HERE`
// Going back to our slideshow object, let's add some functionality.

//1. create an empty property named playInterval

//2. A play() function that moves to the next photo ever 2000ms until the end.

//3.  Tip - use playInterval = setInterval(fn,ms).

//4.  A pause() function that stops the slideshow

// Tip - use clearInterval(playInterval)

// Automatically pause the slideshow if it gets to the end of the photolist while playing.
// - Merge your branches together and submit the link to the github repo below






// SLIDESHOW

var slideshow = {
    photoList:['slide0','slide1','slide2','slide3','slide4'],
    currentPhotoIndex: 0,
    nextPhoto : function(){
        if(this.currentPhotoIndex < this.photoList.length-1){       
            this.currentPhotoIndex++;
        }else if(this.currentPhotoIndex >= this.photoList.length-1){
            return 'end of slides';
        }
        return this.photoList[this.currentPhotoIndex];
    },
    prevPhoto: function(){
        if(this.currentPhotoIndex > 0){
            this.currentPhotoIndex--;
        }else if(this.currentPhotoIndex === 0){
            return 'beginning of slides';
        }
        return this.photoList[this.currentPhotoIndex];
    },

    getCurrentPhoto: function(){
        return this.photoList[this.currentPhotoIndex];
    }
    
    playInterval: null,

    play: function() {
        var self = this;
        this.playInterval = setInterval(function(){self.nextPhoto()}, 2000)
    },

    pause: function() {
        clearInterval(this.playInterval);
    }


};
console.log(slideshow.getCurrentPhoto());
console.log(slideshow.nextPhoto()); 
console.log(slideshow.nextPhoto()); 
console.log(slideshow.prevPhoto());
console.log(slideshow.nextPhoto()); 
console.log(slideshow.nextPhoto());
console.log(slideshow.nextPhoto());
console.log(slideshow.nextPhoto());
console.log(slideshow.nextPhoto());
console.log(slideshow.nextPhoto());
console.log(slideshow.prevPhoto()); 
console.log(slideshow.prevPhoto()); 
console.log(slideshow.nextPhoto());
console.log(slideshow.prevPhoto()); 
console.log(slideshow.prevPhoto()); 
console.log(slideshow.prevPhoto()); 
console.log(slideshow.prevPhoto()); 
console.log(slideshow.prevPhoto()); 
