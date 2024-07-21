var form = document.getElementById("my-form");

async function handleSubmit(event){
    event.preventDefault();

    var status = document.getElementById("my-form-status");
    var data = new FormData(event.target);

    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'applicantion/json'
        }
    }).then(response => {
        if(response.ok){
            status.innerHTML = "Agradeço seu contato, mensagem enviada com sucesso!";
            form.reset();
        } else {
            response.json().then(data => {
                if(Object.hasOwn(data, 'erros')) {
                    status.innerHTML = data["erros"].map(erro => erro["message"]).join(",")
                } else{
                    status.innerHTML = "Ops, ocorreu um erro ao enviar sua mensagem.";
                }
            })
        }
    }).catch(erros => {
        status.innerHTML = "Ops, ocorreu um erro ao enviar sua mensagem!";
    });
};

form.addEventListener("submit", handleSubmit);