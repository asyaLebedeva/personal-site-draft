document.addEventListener('DOMContentLoaded', function () {
    const popup = document.querySelector('#popup'),
          openWindow = document.querySelector('.open-btn'),
          closeWindow = document.querySelector('.close-btn');
    openWindow.addEventListener('click', () => {
        popup.showModal();
    })
                    
    closeWindow.addEventListener('click', () => {
        popup.close();
    })
})

document.addEventListener('DOMContentLoaded', function () {
    const popup2 = document.querySelector('#popup2'),
          openWindow = document.querySelector('.open-btn2'),
          closeWindow = document.querySelector('.close-btn2');
    openWindow.addEventListener('click', () => {
        popup2.showModal();
    })
                    
    closeWindow.addEventListener('click', () => {
        popup2.close();
    })
})

document.addEventListener('DOMContentLoaded', function () {
    const popup3 = document.querySelector('#popup3'),
          openWindow = document.querySelector('.open-btn3'),
          closeWindow = document.querySelector('.close-btn3');
    openWindow.addEventListener('click', () => {
        popup3.showModal();
    })
                    
    closeWindow.addEventListener('click', () => {
        popup3.close();
    })
})
