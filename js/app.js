let contextSW = '/PWA-U2-T2-SSJE/sw.js';
let url = window.location.href;

let player = $('#player')
let photoUser = $('#photoUser')

let btnCamera = $('#btnCamera')
let btnCameraBack = $('#btnCameraBack')
let btnTakePhoto = $('#btnTakePhoto')

const camera = new Camera(player[0]);

btnCamera.on('click', () => {

    camera.on()
    .then(result => {
        if (!result) {
            alert('No se inicio la camara.');
        }
    });


})

btnCameraBack.on('click', () => {
    camera.onBack().then(result => {
        if (!result) {
            alert('No se inicio la camara.');
        }
    });
})

btnTakePhoto.on('click', () => {

    camera.off();
    photoUser.attr('src',camera.takePhoto());

})


if (navigator.serviceWorker) {

    if (url.includes('localhost')) {
        contextSW = '/sw.js';
    }
    navigator.serviceWorker.register(contextSW);
}