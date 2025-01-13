// script.js

// 获取侧栏元素
const sidebar = document.querySelector('.sidebar');

// 假设你有一个按钮来控制侧栏的显示/隐藏
const toggleButton = document.querySelector('#toggleSidebar');

// 为按钮添加点击事件
toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('hidden');
});
