//Funções arrow

//Quando não tenho bloco "{}" , o js já coloca um retorno invisivel
export const somar = (a: number, b:number) => a + b;

//Quando tenho bloco posso ter mais que uma execução e returnar o que quiser com o return
export const somarcomblocoeretorno = (a: number, b:number) => {
    
    console.log("Soma de ",a);
    console.log("Mais",b);
    console.log("O resultado de",a,"mais",b,"é  :");
    return a + b;
} 

export const subtrair = (a: number, b:number) => a - b;


    

