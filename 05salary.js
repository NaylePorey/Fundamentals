function salaryCheck(input) {
    let index = 0;
    const tabsCount = Number(input[index++]);
    let salary = Number(input[index++]);

    for (let i = 0; i < tabsCount; i++) {
        const siteName = input[index++];

        if (siteName === "Facebook") {
            salary -= 150;
        } else if (siteName === "Instagram") {
            salary -= 100;
        } else if (siteName === "Reddit") {
            salary -= 50;
        }

       
        if (salary <= 0) {
            console.log("You have lost your salary.");
            return; 
        }
    }

    console.log(Math.trunc(salary));
}

salaryCheck([10, 750, "Facebook", "Dev.bg", "Instagram", "Facebook", "Reddit", "Facebook", "Facebook"]);