 function traveling(input){
   let index = 0;

   while (input[index] != 'End'){
       let destination = input[index];
        index++;

        let budget = Number(input[index]);
         index++;

        let savings = 0;

        while (savings < budget) {
            let currentSaving = Number(input[index]);
            savings += currentSaving;
            index++;
            
        }
        console.log(`Going to ${destination}!`);

   }

 }

 traveling(["Greece","1000","200","200","300","100","150","240","Spain","1200","300","500","193","423","End"])