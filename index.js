const carData = {
  model: "NEW 2023 MAZDA",
  name: "CX-90",
  financeOffer: "Financing at 2.9% APR",
  termLength: "36",
  termSecurity: "N/A",
  termDownPayment: "N/A",
  expirationDate: "10/02/2023",
};

function populateCarInfo() {
  document.getElementById("car-model").textContent = carData.model;
  document.getElementById("car-name").textContent = carData.name;
  document.getElementById("finance-offer").textContent = carData.financeOffer;
  document.getElementById("term-length").textContent = carData.termLength;
  document.getElementById("term-security").textContent = carData.termSecurity;
  document.getElementById("term-down-payment").textContent =
    carData.termDownPayment;
  document.getElementById(
    "expiration"
  ).textContent = `*Expires on ${carData.expirationDate}`;
}

window.addEventListener("load", populateCarInfo);

//Modal

// JavaScript Functionality
// Get references to the elements
const disclaimerText = document.querySelector(".disclaimer-span");
const infoIcon = document.querySelector(".info-icon");
const disclaimerModal = document.getElementById("disclaimer-modal");
const closeBtn = document.querySelector(".close");

// Function to open the modal
function openModal() {
  disclaimerModal.style.display = "block";
}

// Function to close the modal
function closeModal() {
  disclaimerModal.style.display = "none";
}

// Event listeners for opening and closing the modal
disclaimerText.addEventListener("click", openModal);
infoIcon.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
window.addEventListener("click", (event) => {
  if (event.target === disclaimerModal) {
    closeModal();
  }
});
