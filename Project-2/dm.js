const chatBody = document.getElementById('message');
const textInput = document.getElementById('textInput');
const send =  document.getElementById('button');

function fun1(){
    const newMessage= document.createElement('div');
    newMessage.innerHTML = textInput.value;
    newMessage.classList.add('user-message');
    chatBody.appendChild(newMessage);
    textInput.value='';
    renderSarahResponse(newMessage);
};

const renderSarahResponse =(newMessage) => {
    const res = getSarahResponse(newMessage);

    
}

send.addEventListener('click', fun1);

const getSarahResponse = (newMessage) => {
    return response1[newMessage]== undefined?"Please try something else":response1[newMessage];
};