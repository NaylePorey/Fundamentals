function histogram(array){
       const n = array[0];
       let p1 = 0; let p2 = 0; let p3 = 0; let p4 = 0; let p5 = 0;
 
       for(let i = 1; i <= n; i++){
        const currNum = array[i];

        if(currNum < 200) p1++;
        else if(currNum < 400) p2++
        else if(currNum < 600) p3++
        else if(currNum < 800) p4++
        else p5++;
       }
          const p1Procentage = (p1 / n) * 100;
          console.log(`${p1Procentage.toFixed(2)}%`);

          const p2Procentage = (p2 / n) * 100;
          console.log(`${p2Procentage.toFixed(2)}%`);

            const p3Procentage = (p3 / n) * 100;
            console.log(`${p3Procentage.toFixed(2)}%`);

            const p4Procentage = (p4 / n) * 100;
            console.log(`${p4Procentage.toFixed(2)}%`);

            const p5Procentage = (p5 / n) * 100;
            console.log(`${p5Procentage.toFixed(2)}%`);
}
    
          

histogram([3, 1, 999]);