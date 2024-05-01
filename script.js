let clickableContent = document.querySelectorAll('.clickable .column')

for (let column of clickableContent)
    column.addEventListener("click", () => {
        window.location.href = "productDetail.html";
    })