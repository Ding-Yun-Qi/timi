let acceptBtn = document.getElementById("acceptBtn");
let rejectBtn = document.getElementById("rejectBtn");
let image = document.getElementById("image");

let rejectCount = 0;
const images = ['image1.jpg', 'image2.jpg', 'image3.jpg']; // 图片数组

// 按钮点击事件
acceptBtn.addEventListener("click", () => {
    if (rejectCount === 0) {
        acceptBtn.classList.add("grow");
        rejectBtn.classList.add("shrink");
    }
});

rejectBtn.addEventListener("click", () => {
    if (rejectCount < images.length - 1) {
        rejectCount++;
        image.src = images[rejectCount];
        rejectBtn.classList.add("shrink");
        acceptBtn.classList.add("grow");
    }

    if (rejectCount === images.length - 1) {
        rejectBtn.disabled = true;
    }
});

// 按钮悬停效果
function hoverBtn(type) {
    if (type === 'accept') {
        acceptBtn.style.backgroundColor = '#ff4488';
    } else if (type === 'reject') {
        rejectBtn.style.backgroundColor = '#5679d3';
    }
}

function resetBtn(type) {
    if (type === 'accept') {
        acceptBtn.style.backgroundColor = '#ff77a1';
    } else if (type === 'reject') {
        rejectBtn.style.backgroundColor = '#6b9af6';
    }
}
