function upDate(previewPic) {

    // kiểm tra sự kiện hover
    console.log("Mouse over triggered");

    // in thông tin ảnh
    console.log(previewPic.alt);
    console.log(previewPic.src);

    // lấy div hiển thị
    let imageDiv = document.getElementById("image");

    // đổi text
    imageDiv.innerHTML = previewPic.alt;

    // đổi background image
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

function undo() {

    let imageDiv = document.getElementById("image");

    // reset background
    imageDiv.style.backgroundImage = "url('')";

    // reset text
    imageDiv.innerHTML = "Hover over an image below to display here.";
}
