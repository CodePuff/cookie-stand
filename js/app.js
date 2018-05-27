'use strict';

//create a global array of open store hours. use single quotes

var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

//create a local object literal for First and Pike

var firstAndPikeStore = {
  name: 'First and Pike',

  //creating key value pairs called properties inside of each store object

  //minimum customer per hour
  minCustPerHour: 23,

  //maximum customer per hour
  maxCustPerHour: 65,

  //average cookies sold per hour
  avgCookiesSoldPerHour: 6.3,

  //random customers by hour. this is an open array as we are looking to find the answer to this
  randCustByHour: [],

  //cookies sold by hour. this is also an open array as we are looking to find the answer to this
  cookiesSoldByHour: [],

  //total number of cookies. this is set to zero as we are waiting to calculate the total number based on the function
  totalCookies: 0,

  //for method function to calculate random customers by hour
  calcRandCustByHour:function(){

    for(var i=0;i<hours.length;i++){

      //Math.floor is used to round down while Math.random is used to generate random number based on parameter calling the methods in the object literal via 'this'
      this.randCustByHour.push(Math.floor(Math.random()*(this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
    
      //referencing [i] based on hours open array
      console.log(this.randCustByHour[i]);

    }
  },

  //for method function to calculate cookies sold by hour calling the methods in the object literal via 'this'
  calcCookiesSoldByHour: function(){

    for(var j=0;j<hours.length;j++){

      this.cookiesSoldByHour.push(Math.round(this.avgCookiesSoldPerHour*this.randCustByHour[j]));

      console.log(this.cookiesSoldByHour[j]);
    }
  },

  //getters and setters
  render:function(){

    var firstAndPike = document.getElementById('firstAndPike');

    var firstNpike = document.getElementById('1stAndPike');

    //calling the methods in the object literal 
    this.calcRandCustByHour();
    this.calcCookiesSoldByHour();

    //Using DOM Manipulation, create a variable to be able to append an item to the list and create a new h3 element
    var h3El = document.createElement('h3');
  
    //text will be given to the new h3 elementl which is the store name
    h3El.textContent = this.name;

    //connecting the new sales info to the store name
    firstAndPike.appendChild(h3El);

    for(var k=0; k<hours.length; k++){

      //stepping through the hours array
      var liEl=document.createElement('li');

      //creating li list elements with the text of the hours
      liEl.textContent = hours[k] + ':' + this.cookiesSoldByHour[k]+'cookies';
  
      console.log(liEl);

      firstNpike.appendChild(liEl);
    }

  }

};

firstAndPikeStore.render();