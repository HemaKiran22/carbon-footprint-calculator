// Switch between steps
function nextStep(step) {
    // Hide all steps
    const steps = document.querySelectorAll('.form-step');
    steps.forEach((stepElement) => {
      stepElement.style.display = 'none';
    });
  
    // Show the next step
    const nextStep = document.getElementById(`step-${step}`);
    nextStep.style.display = 'block';
  }
  
  // Calculate carbon footprint based on input data
  function calculateFootprint() {
    // Transportation calculations
    const transportMode = document.getElementById('transport-mode').value;
    const transportDistance = parseInt(document.getElementById('transport-distance').value) || 0;
    const transportEmissions = transportDistance * (transportMode === 'car' ? 0.27 : 0.1); // Placeholder value
  
    // Housing calculations
    const electricityRooms = parseInt(document.getElementById('electricity').value) || 0;
    const heating = document.getElementById('heating').value;
    const electricityEmissions = electricityRooms * 0.5; // Placeholder value for electricity
  
    // Food consumption calculations
    const diet = document.getElementById('diet').value;
    const foodWaste = document.getElementById('food-waste').value;
    const foodEmissions = diet === 'meat-heavy' ? 10 : diet === 'vegetarian' ? 5 : 2; // Placeholder for food emissions
  
    // Waste & Recycling calculations
    const wasteBags = parseInt(document.getElementById('waste').value) || 0;
    const recycling = document.getElementById('recycling').value;
    const wasteEmissions = wasteBags * 1.5; // Placeholder for waste emissions
  
    // Total Footprint
    const totalFootprint = transportEmissions + electricityEmissions + foodEmissions + wasteEmissions;
  
    // Show results
    document.getElementById('footprint-result').textContent = `Your total carbon footprint is: ${totalFootprint.toFixed(2)} kg CO2e per month.`;
  
    // Show suggestions
    const suggestions = document.getElementById('suggestions');
    suggestions.innerHTML = '';
  
    if (totalFootprint > 100) {
      suggestions.innerHTML += `<li>Try reducing your meat consumption.</li>`;
      suggestions.innerHTML += `<li>Consider using public transport instead of driving.</li>`;
      suggestions.innerHTML += `<li>Recycling more can reduce your carbon footprint.</li>`;
    } else {
      suggestions.innerHTML += `<li>Your carbon footprint is relatively low! Keep it up.</li>`;
    }
  
    document.getElementById('results').style.display = 'block';
  }
  