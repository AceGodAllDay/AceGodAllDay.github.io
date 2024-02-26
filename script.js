document.addEventListener('DOMContentLoaded', function () {
    const accordionButtons = document.querySelectorAll('.accordion button');

    function toggleAccordion() {
        const itemToggle = this.getAttribute('aria-expanded');

        accordionButtons.forEach(item => {
            item.setAttribute('aria-expanded', 'false');
        });

        if (itemToggle === 'false') {
            this.setAttribute('aria-expanded', 'true');
        }
    }

    accordionButtons.forEach(item => {
        item.addEventListener('click', toggleAccordion);
    });
});