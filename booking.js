document.getElementById("appointmentForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    // Get form values
    const name = document.getElementById("name").value;
    const place = document.getElementById("place").value;
    const symptoms = document.getElementById("symptoms").value;
    const date = document.getElementById("date").value;
    const age = document.getElementById("age").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
  
    // Fill receipt
    document.getElementById("r-name").textContent = name;
    document.getElementById("r-place").textContent = place;
    document.getElementById("r-symptoms").textContent = symptoms;
    document.getElementById("r-date").textContent = date;
    document.getElementById("r-age").textContent = age;
    document.getElementById("r-gender").textContent = gender;
  
    // Show modal
    document.getElementById("receiptModal").style.display = "flex";
  });
  
  // Close receipt
  function closeReceipt() {
    document.getElementById("receiptModal").style.display = "none";
  }
  document.getElementById("appointmentForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    // Get form values
    const name = document.getElementById("name").value;
    const place = document.getElementById("place").value;
    const symptoms = document.getElementById("symptoms").value;
    const date = document.getElementById("date").value;
    const age = document.getElementById("age").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
  
    // Fill receipt
    document.getElementById("r-name").textContent = name;
    document.getElementById("r-place").textContent = place;
    document.getElementById("r-symptoms").textContent = symptoms;
    document.getElementById("r-date").textContent = date;
    document.getElementById("r-age").textContent = age;
    document.getElementById("r-gender").textContent = gender;
  
    // Show modal first
    const modal = document.getElementById("receiptModal");
    modal.style.display = "flex";
  
    // Wait for modal to be visible, then apply Vanta
    setTimeout(() => {
      if (!window.vantaEffect) {
        window.vantaEffect = VANTA.CELLS({
          el: "#receiptModal",
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          color1: 0x32dcdc,
          color2: 0x35e6f2,
          size: 1.30,
          speed: 3.30
        });
      }
    }, 100); 
  });
  function closeReceipt() {
    document.getElementById("receiptModal").style.display = "none";
  
    // Destroy Vanta effect
    if (window.vantaEffect) {
      window.vantaEffect.destroy();
      window.vantaEffect = null;
    }
  }
  