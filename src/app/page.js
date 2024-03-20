const url = "https://github.com/Rioske-Nakamura/BackEnd-ifms";

export default async function Home() {



  const resposta = await fetch(url,
  {
    next:{
      revalidate:1
    }
  });

  const campi= await resposta.json();
 
  return (
    <main>
      <h1>Home</h1>
      {campi.map((campus) =>
        <div>
             <p>{campus.nome_campua}</p>
        </div>
      )}
    </main>
  )
}
