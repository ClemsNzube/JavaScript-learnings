// In my own understanding, classes are advanced OOP

class school{
    constructor(name, state){
        this.name = name;
        this.state = state;
    }

    getSchoolLocation(){
        console.log("The school "+ this.name + " is in " + this.state);
    }
}

const  mySchool = new school("University of Nigeria Nsukka", "Enugu");
mySchool.getSchoolLocation();