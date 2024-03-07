import Link from 'next/link'

export default function NotFound(){
    return(
        <div>
            <h1>Pagina nao encontrada</h1>
            <Link href="/">ERROR Retornar para Pagina inicial</Link>
        </div>
    )
}