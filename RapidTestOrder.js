class RapidTestOrder {
  constructor(sFrom) {
    this.OrderState = {
      WELCOMING: () => {
        let aReturn = [];
        aReturn.push("Welcome to Erica's Cafe and CO.");
        aReturn.push("What size latte would you like on this brew-tiful day?");
        this.stateCur = this.OrderState.SIZE;
        return aReturn;
      },
      SIZE: (sInput) =>{
       let aReturn = [];
       this.isDone = false;
       if (sInput.toLowerCase().startsWith('s')){
        aReturn.push("Sounds good!")
       }
       aReturn.push("What type of milk do you want in your drink?") 
       aReturn.push("We have Oat and Almond milk!");
       this.stateCur = this.OrderState.SECOND;
       return aReturn;
      },

      SECOND: () => {
        let aReturn = [];
        this.isDone = false;
       
         aReturn.push("How about you try our Cheese Danish?")
        
        this.stateCur = this.OrderState.THIRD;
        return aReturn;
      },

      THIRD: () => {
        let aReturn = [];
        this.isDone = false;
       
         aReturn.push("Would you like a Bagel then?")
        
        this.stateCur = this.OrderState.RESERVING;
        return aReturn;
      },

      RESERVING: (sInput) => {
        let aReturn = [];
        this.isDone = true;
        if (sInput.toLowerCase().startsWith('y')) {
          aReturn.push(`Your wonderful baked goods are reserved under the phone number ${this.sFrom}`);
          let d = new Date();
          d.setMinutes(d.getMinutes() + 120);
          aReturn.push(`Please pick it up at 225 Markham Road, Ontario before ${d.toTimeString()}`);
        } else {
          aReturn.push("Thanks for trying our ordering service");
          aReturn.push("Have a brew-tiful day!")
        }
        return aReturn;
      }
    };

    this.stateCur = this.OrderState.WELCOMING;
    this.isDone = false;
    this.sFrom = sFrom;
  }
  handleInput(sInput) {
    return this.stateCur(sInput);
  }
  isDone() {
    return this.isDone;
  }
}

export { RapidTestOrder }