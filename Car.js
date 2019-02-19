function Car(manufacturer, model, year, plateNumber){
        this.manufacturer=manufacturer;
        this.model=model;
        this.year=year;
        this.platenumber= testPlateNumber(plateNumber);

}
function testPlatenumber(plateNumber){
        var regex= new RegExp(/^[A-Za-z]{3}-/d{3}$/);
        var value = regex.test(plateNumber);
        if(!value){
                return undefined;
}
        return plateNumber;
}

var car= new Car("Ford","Focus",2014,"ABC-123");
console.log(car);

module.exports= {                   
        Car : car                  
}                                  
