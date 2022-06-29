import './app.scss';
import {useState} from 'react';

function App(){
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  const [mensagem, setMensagem] = useState('');

  function calcularIMC(){
   const alt = altura/100;
   const imc = peso/(alt * alt);

  if(imc < 18.6){
    setMensagem("Voce esta abaixo do seu peso! Seu IMC é " + imc.toFixed(2));
  }else if(imc >= 18.6 && imc < 24.9 ){
    setMensagem("Peso ideal! Seu IMC é " + imc.toFixed(2)); 
  }else if(imc >= 24.9 && imc < 34.9){
    setMensagem("Voce esta acima do seu peso! Seu IMC é " + imc.toFixed(2));
  }else if(imc > 34.9){
    setMensagem("Cuidado Obesidade! Seu IMC é " + imc.toFixed(2));
  }
  }

  return(
    <div className='app'>
      
      <h1>Calculando o IMC</h1>
      
      <div className='area-input'>
        <input type="text" 
        placeholder="Coloque seu Peso(Kg)" 
        value={peso}
        onChange={ (e) => setPeso(e.target.value)} 
        />
        
        <input type="text" 
        placeholder="Coloque sua Altura(cm)" 
        value={altura}
        onChange={ (e) => setAltura(e.target.value)}
        />

        <button onClick={calcularIMC}>Calcular</button>
      </div>
      
      <span>{mensagem}</span>
      
    </div>
  )
}
  

export default App;
