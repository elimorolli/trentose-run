describe("Coach", function() {
    
  it("Penso che torni true", function() { 
      expect(Coach.start("normal")).toBe(true);
  });  
    
    it("Penso che torni false",function(){
        expect(Coach.start("hard")).toBe(false);
    });
    
    it("Penso venga 2000",function(){
        Coach.start("normal");
       Coach.track("bike",5); 
        expect(Coach.track("run",10)).toBe(2000);
        
    });
    it("Dovrebbe trnare 2, ma siccome viene moltiplicato per 100, torna 200",function(){
        Coach.start("normal");
       Coach.track("bike",5); 
    Coach.track("run",10);
    expect(Coach.checkProgress()).toBe(200);
    });
 
});
