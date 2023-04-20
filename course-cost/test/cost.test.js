
describe("The courseCost function", function() {

    it("should be able to calculate cost of the course with discount 40%. date between 20-25", function(){
        
        assert.deepEqual({
            status: 'success',
            code: 'r1',
            description: 'Ruby on Rails intro',
            cost: 5675,
            discount: 2270,
            amountDue: 3405
          }, courseCost("r1", "2023-05-21")) // 
         // 

    })

    it("should be able to calculate cost of the course with discount 20%. date between 10-15", function(){
        
        assert.deepEqual({
            status: 'success',
            code: 'r1',
            description: 'Python',
            cost: 7850,
            discount: 1570,
            amountDue: 6280
          }, courseCost("p1", "2023-05-13")) // 
         // 

    })


    it("should be able to calculate cost of the course when discount is zero- date not in 10-15 and not in 20-25 (p2 code)", function(){
        
        assert.deepEqual({
            status: 'success',
            code: 'r1',
            description: 'Intro to PHP course',
            cost: 8990,
            discount: 0,
            amountDue: 8990
          }, courseCost("p2", "2023-05-7")) // 
         // 

    })
    it("should be able to calculate cost of the course when discount is zero- date not in 10-15 and not in 20-25(r1 code)", function(){
        
        assert.deepEqual({
            status: 'success',
            code: 'r1',
            description: 'Ruby on Rails intro',
            cost: 5675,
            discount: 0,
            amountDue: 5675
          }, courseCost("r1", "2023-05-7")) // 
         // 

    })
    it("should be able to calculate cost of the course when discount is zero- date not in 10-15 and not in 20-25 (p1 code)", function(){
        
        assert.deepEqual({
            status: 'success',
            code: 'r1',
            description: 'Python',
            cost: 7850,
            discount: 0,
            amountDue: 7850
          }, courseCost("p1", "2023-05-7")) // 
         // 

    })

    it("should return status: Invalid code when you enter invalid course code", function(){
        
        assert.deepEqual({ status: 'Invalid code' }, courseCost("c5", "2023-05-7")) // 
         // 

    })
    it("should return status: Invalid day when you enter invalid date/not a date", function(){
        
        assert.deepEqual({ status: 'Invalid day' }, courseCost("p1", "apple")) // 
         // 

    })
})