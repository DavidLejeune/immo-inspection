document.getElementById("calculateButton").addEventListener("click", calculateCost);

function calculateCost() {
    const certificationType = document.getElementById("certType").value;
    const area = parseFloat(document.getElementById("area").value);
    const distance = parseFloat(document.getElementById("distance").value) || 0; // Assume 0 if distance is not filled
    let baseCost, extraAreaCost, distanceCost;

    if (certificationType === "Vastgoedkeuring") {
        if (area <= 120) {
            baseCost = 235;
            extraAreaCost = 0;
        } else {
            const extraArea = area - 120;
            baseCost = 235 + Math.floor(extraArea / 50) * 50;
            extraAreaCost = extraArea % 50 === 1 ? 50 : 0;
        }
        distanceCost = distance < 20 ? 0 : distance >= 20 && distance < 50 ? 50 : distance >= 50 && distance < 100 ? 90 : 125;
    } else if (certificationType === "Opleveringskeuring") {
        if (area <= 120) {
            baseCost = 225;
            extraAreaCost = 0;
        } else {
            const extraArea = area - 120;
            baseCost = 225 + Math.floor(extraArea / 50) * 40;
            extraAreaCost = extraArea % 50 === 1 ? 40 : 0;
        }
        distanceCost = distance < 20 ? 0 : distance >= 20 && distance < 50 ? 50 : distance >= 50 && distance < 100 ? 90 : 125;
    }

    const totalCost = baseCost + extraAreaCost + distanceCost;

    document.getElementById("totalCost").textContent = totalCost;
}
