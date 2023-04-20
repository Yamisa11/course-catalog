
describe("The courseCost function", function() {

    it("should be able to calculate cost of the course with discount 40%", function(){
        
        assert.equal(1875, tutorWageCalculator("4-4-4-8-5", 1)) // 
        assert.equal(1425, tutorWageCalculator("3-7-2-3-4", 1)) // 

    })
})