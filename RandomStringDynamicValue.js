(function () {
    var RandomStringDynamicValue;

    RandomStringDynamicValue = function () {

        this.evaluate = function () {
            var array = this.csvString.split(',');
            var idx = Math.floor(Math.random() * array.length);
            return "" + array[idx];
        };
        
        this.title = function () {
            return "CSV String Randomizer";
        };
    };

    RandomStringDynamicValue.identifier = "com.juplo.PawExtensions.RandomStringDynamicValue";

    RandomStringDynamicValue.title = "CSV String Randomizer Dynamic Value";

    RandomStringDynamicValue.inputs = [
        DynamicValueInput("csvString", "Type", "String")
    ];

    registerDynamicValueClass(RandomStringDynamicValue);

}).call(this);
