function processarTexto(inputText) {
  if (!inputText) return { parteBranca: "", parteAmarela: "" };

if (inputText.includes(":")) {
    const partes = inputText.split(":");
    // parteBranca recebe o que vem antes do :
    // parteAmarela recebe o : e o resto (usando trim para limpar espaços extras)
    return {
      parteBranca: partes[0].trim() + ":",
      parteAmarela: partes.slice(1).join(":").trim() 
    };
  }

  const words = inputText.trim().split(/\s+/);
  
  // Mantive sua lógica de dividir em 1.5
  const metade = Math.floor(words.length / 1.5);
  
  const parteBranca = words.slice(0, metade).join(' ');
  const parteAmarela = words.slice(metade).join(' ');

  return { parteBranca, parteAmarela };
}

export default processarTexto;