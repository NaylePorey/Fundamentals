function legendaryFarming(str) {
    let keyMaterialQtys = { motes: 0, fragments: 0, shards: 0 };
    let junkMaterialQtys = {};
    
    let materialLegendaries = {
        shards: "Shadowmourne",
        fragments: "Valanyr",
        motes: "Dragonwrath"
    };

    let infoEls = str.split(' ');
    let hasWinner = false; 
    for (let i = 0; i < infoEls.length; i += 2) {
        let qty = Number(infoEls[i]);
        let material = infoEls[i + 1].toLowerCase();

        if (material in keyMaterialQtys) {
            keyMaterialQtys[material] += qty;

            if (keyMaterialQtys[material] >= 250) {
                console.log(`${materialLegendaries[material]} obtained!`);
                keyMaterialQtys[material] -= 250; 
                hasWinner = true;
                break;
            }
        } else {
            
            if (material in junkMaterialQtys) {
                junkMaterialQtys[material] += qty;
            } else {
                junkMaterialQtys[material] = qty;
            }
        }
    }

    
    let keyMaterialEntries = Object.entries(keyMaterialQtys)
        .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
        
    
    let junkMaterialEntries = Object.entries(junkMaterialQtys)
        .sort((a, b) => a[0].localeCompare(b[0]));

    
    for (let [material, qty] of keyMaterialEntries) {
        console.log(`${material}: ${qty}`);
    }

    
    for (let [material, qty] of junkMaterialEntries) {
        console.log(`${material}: ${qty}`);
    }
}