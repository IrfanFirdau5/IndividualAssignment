
document.addEventListener('DOMContentLoaded', function () {
    const startDateInput = document.getElementById('start-date');
    const endDateInput = document.getElementById('end-date');
    const startMonthDisplay = document.getElementById('start-month-display');
    const startYearDisplay = document.getElementById('start-year-display');
    const endMonthDisplay = document.getElementById('end-month-display');
    const endYearDisplay = document.getElementById('end-year-display');

    startDateInput.addEventListener('input', updateStartDate);
    endDateInput.addEventListener('input', updateEndDate);

    function updateStartDate() {
        const startDate = new Date(startDateInput.value);
        startMonthDisplay.textContent = startDate.toLocaleString('en-us', { month: 'long' });
        startYearDisplay.textContent = startDate.getFullYear();
    }

    function updateEndDate() {
        const endDate = new Date(endDateInput.value);
        endMonthDisplay.textContent = endDate.toLocaleString('en-us', { month: 'long' });
        endYearDisplay.textContent = endDate.getFullYear();
    }

    const images = document.querySelectorAll('#slideshow img');
    let currentIndex = 0;

    function showImage(index) {
        images.forEach((image, i) => {
            image.style.display = i === index ? 'block' : 'none';
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    setInterval(nextSlide, 3000);

    showImage(currentIndex);
});
