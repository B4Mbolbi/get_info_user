let tg = window.Telegram.WebApp;

tg.expand();


function send_data(objButton){
    tg.sendData(`aspect #${objButton.value}`); 
}