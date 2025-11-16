let acceptBtn = document.getElementById("acceptBtn");
let rejectBtn = document.getElementById("rejectBtn");
let image = document.getElementById("image");
let resultPage = document.getElementById("resultPage");

let rejectCount = 0;
const images = ['image1.jpg', 'image2.jpg', 'image3.jpg']; // 图片数组

// 按钮点击事件
acceptBtn.addEventListener("click", () => {
    // 点击接受后跳转到新页面
    document.body.style.display = 'none'; // 隐藏当前页面
    resultPage.style.display = 'block'; // 显示结果页面
});

rejectBtn.addEventListener("click", () => {
    if (rejectCount < 5) {
        rejectCount++;
        image.src = images[rejectCount % images.length]; // 循环切换图片
        rejectBtn.classList.add("shrink");
        acceptBtn.classList.add("grow");
    } else {
        rejectBtn.classList.add("shrink");
        acceptBtn.classList.add("grow");
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
