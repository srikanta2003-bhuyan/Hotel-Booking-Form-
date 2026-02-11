const checkIn = document.getElementById("checkin");
const checkOut = document.getElementById("checkout");

checkIn.addEventListener("change", function () {
    // Set minimum checkout date equal to check-in date
    checkOut.min = this.value;

    // If checkout date is before check-in, clear it
    if (checkOut.value && checkOut.value < this.value) {
        checkOut.value = "";
    }
});
