function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.textContent = '❄'; // Bạn có thể thay bằng ký tự khác như "✻" hoặc "⛄"

    const main = document.getElementById('content');

    // Đặt vị trí ngẫu nhiên cho bông tuyết
    snowflake.style.left = Math.random() * 100 + 'vw';
    // Đặt thời gian rơi ngẫu nhiên
    snowflake.style.animationDuration = Math.random() * 3 + 6 + 's';
    // Đặt kích thước ngẫu nhiên
    snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';

    // Thêm bông tuyết vào #main
    main.appendChild(snowflake);

    // Xóa bông tuyết sau khi hiệu ứng kết thúc
    setTimeout(() => {
        snowflake.remove();
    }, 5000); // Thời gian sống của bông tuyết
}

// Tạo tuyết rơi mỗi 300ms
setInterval(createSnowflake, 300);