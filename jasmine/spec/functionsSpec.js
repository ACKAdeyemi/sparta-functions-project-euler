describe("Title of testing arguments",function() {

    it("Testing the convertArrayToAnObject() function", function(){

        var obj = {
            ting: "tang",
            tung: "tong"
        };
        expect(convertArrayToAnObject(["ting","tang","tung","tong"])).toBe(obj);

    });

    it("Testing the basicVariableConvertion() function", function(){

        expect(fizzBuzz(20)).toEqual("Buzz");

    });

});
