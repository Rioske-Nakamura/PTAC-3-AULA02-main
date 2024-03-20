const url = "http://localhost:3000/api"

export default async function Home(){
    const reposta = await fetch(url,{
        cache: "no-cache"
    });
   
}

const campus= await resposta.json();

export default function Registro(){
    return( 
        <main>
            <h1>Home</h1>
            {campus.map((campi)=>
            <div>
                <p>{campi.nome_campi}</p>
            </div>
            
            )}
        </main>
    );
}