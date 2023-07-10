const containerElement = document.querySelector(".container")


window.addEventListener("mousemove", (event) => {
    containerElement.innerHTML = `
        <div class="mouse-location">
            ${event.clientX}
            <h4>Mouse X Position (px)</h4>
        </div>
        <div class="mouse-location">
            ${event.clientY}
            <h4>Mouse Y Position (px)</h4>
        </div>
    `
})