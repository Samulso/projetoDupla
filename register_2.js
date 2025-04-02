document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('register-form');
    const dataNascimentoInput = document.getElementById('data_nascimento');
    const pesoInput = document.getElementById('peso');
    const alturaInput = document.getElementById('altura');
    const objetivoNutricionalSelect = document.getElementById('objetivo_nutricional');
    const naoRestricaoRadio = document.getElementById('nao_restricao');
    const simRestricaoRadio = document.getElementById('sim_restricao');
    const restricaoInput = document.getElementById('restricao');
    const nExercitoRadio = document.getElementById('n_exercito');
    const excOp1Radio = document.getElementById('exc_op1');
    const excOp2Radio = document.getElementById('exc_op2');
    const excOp3Radio = document.getElementById('exc_op3');
    const naoCondRadio = document.getElementById('nao_cond');
    const simCondRadio = document.getElementById('sim_cond');
    const condicaoInput = document.getElementById('condicao');
    const consumoAguaSelect = document.getElementById('consumo_agua_dia');
    const btnSubmit = document.getElementById('btn_sbmt');

    
    restricaoInput.style.display = 'none';
    condicaoInput.style.display = 'none';

    
    simRestricaoRadio.addEventListener('change', () => {
        if (simRestricaoRadio.checked) {
            restricaoInput.style.display = 'inline-block';
        } else {
            restricaoInput.style.display = 'none';
        }
    });
    naoRestricaoRadio.addEventListener('change', () => {
        if (naoRestricaoRadio.checked) {
            restricaoInput.style.display = 'none';
        } else {
            restricaoInput.style.display = 'inline-block';
        }
    });

    simCondRadio.addEventListener('change', () => {
        if (simCondRadio.checked) {
            condicaoInput.style.display = 'inline-block';
        } else {
            condicaoInput.style.display = 'none';
        }
    });

    naoCondRadio.addEventListener('change', () => {
        if (naoCondRadio.checked) {
            condicaoInput.style.display = 'none';
        } else {
            condicaoInput.style.display = 'inline-block';
        }
    });

    btnSubmit.addEventListener('click', (event) => {
        event.preventDefault(); 

        const dataNascimento = dataNascimentoInput.value;
        const peso = pesoInput.value;
        const altura = alturaInput.value;
        const objetivoNutricional = objetivoNutricionalSelect.value;
        const possuiRestricao = simRestricaoRadio.checked;
        const restricao = restricaoInput.value;
        const frequenciaExercicio = document.querySelector('input[name="opcao_freq"]:checked').value;
        const possuiCondicaoMedica = simCondRadio.checked;
        const condicaoMedica = condicaoInput.value;
        const consumoAgua = consumoAguaSelect.value;

        if (!dataNascimento) {
            alert('Por favor, insira sua data de nascimento.');
            return;
        }
        if (!peso) {
            alert('Por favor, insira seu peso.');
            return;
        }
        if (!altura) {
            alert('Por favor, insira sua altura.');
            return;
        }
        if (!objetivoNutricional) {
            alert('Por favor, selecione seu objetivo nutricional.');
            return;
        }

        if (possuiRestricao && !restricao) {
            alert('Por favor, insira suas restrições alimentares.');
            return;
        }
        if (possuiCondicaoMedica && !condicaoMedica) {
            alert('Por favor, insira sua condição médica.');
            return;
        }
        if (!consumoAgua) {
            alert('Por favor, selecione seu consumo de água.');
            return;
        }

        
        const userData1 = {
            dataNascimento,
            peso,
            altura,
            objetivoNutricional,
            possuiRestricao,
            restricao,
            frequenciaExercicio,
            possuiCondicaoMedica,
            condicaoMedica,
            consumoAgua
        };
        let existingData = localStorage.getItem('userData');
        existingData = existingData ? JSON.parse(existingData) : {};
        const newData = { ...existingData, ...userData1 };
        localStorage.setItem('userData', JSON.stringify(newData));

        alert('Cadastro realizado com sucesso!');
        
        window.location.href = 'login.html';
    });
});x